/*-----------------------------------------------------------------------*/
/*   Projective transformation  (R2 --> R2)                              */
/*-----------------------------------------------------------------------*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

FILE *open_w();
FILE *open_wb();
FILE *open_r();
FILE *open_rb();

int check_arg();
int mult();
int transp();
void usage();
float *vector();
float **matrix();
float **convert_matrix();
double *dvector();
double **dmatrix();
int *ivector();
int **imatrix();
short *svector();
short **smatrix();
float **submatrix();
void free_vector();
void free_dvector();
void free_ivector();
void free_matrix();
void free_dmatrix();
void free_imatrix();
void free_submatrix();
void free_convert_matrix();
void nrerror();

/* Acrescentados por mim*/
unsigned char **bmatrix();
void free_bmatrix();
unsigned char *bvector();
void free_bvector();


// #include "myfunc2.c"
// #include "nr.h"

#define SWAP(a,b) {double temp=(a);(a)=(b);(b)=temp;}
void gaussj();

#define CGR 0.0174532925199433
#define A   6378137.000
#define E2  0.00669438002290079
#define MAX 5000

main (argc, argv)
int    argc;
char **argv;

{
	int     n, i, j, k, neq, nunk, k1, k2, nline, ndec, pos;
	double  x[MAX],y[MAX],u[MAX],v[MAX], xx, yy, uu, vv, ru, rv, dx, dy, du,dv;
	double  su2,sv2,rmsx,rmsy;
	double  **a, **b, **at, **nn, **bb, *p, *q;
	char    line[100],out_fmt[40];
	FILE    *fp1;

	if (argc < 2) usage();

/**********************************************************************/
/* Set number of decimal places for outuput                           */
/**********************************************************************/

	ndec=3;
	if(check_arg(argc,argv,'d',&pos)==1)
	{
		sscanf(argv[pos+1],"%d",&ndec);
	}
	if     (ndec==0) strcpy(out_fmt,"%10.0f %10.0f\n");
	else if(ndec==1) strcpy(out_fmt,"%11.1f %11.1f\n");
	else if(ndec==2) strcpy(out_fmt,"%12.2f %12.2f\n");
	else if(ndec==3) strcpy(out_fmt,"%13.3f %13.3f\n");
	else if(ndec==4) strcpy(out_fmt,"%14.4f %14.4f\n");
	else if(ndec==5) strcpy(out_fmt,"%15.5f %15.5f\n");
	else if(ndec==6) strcpy(out_fmt,"%16.6f %16.6f\n");
	else if(ndec==7) strcpy(out_fmt,"%17.7f %17.7f\n");
	else if(ndec==8) strcpy(out_fmt,"%18.8f %18.8f\n");
	else if(ndec==9) strcpy(out_fmt,"%19.9f %19.9f\n");
	else if(ndec==10) strcpy(out_fmt,"%20.10f %20.10f\n");
	else
	{
		fprintf(stderr,"Invalid number of decimal places\n");
		exit(1);
	}



	fp1=open_r(argv[1]);
	n     = 0;
	nline = 0;
	dx    = 0;
	dy    = 0;
	du    = 0;
	dv    = 0;
	while (fgets (line,99,fp1)!=NULL)
	{
		if (line[0]!='#')
		{
			sscanf (line,"%lf %lf %lf %lf",&x[n],&y[n],&u[n],&v[n]);
			dx += x[n];
			dy += y[n];
			du += u[n];
			dv += v[n];
			n++;
			if(n>MAX)
			{
				fprintf(stderr,"Too many points (>%d)\n",n);
				exit(1);
			}
		}
		nline++;
	}
	dx = dx/n;
	dy = dy/n;
	du = du/n;
	dv = dv/n;
	for (i=0;i<n;i++)
	{
		x[i]=x[i]-dx;
		y[i]=y[i]-dy;
		u[i]=u[i]-du;
		v[i]=v[i]-dv;
	}

	fprintf (stderr,">> No. of valid points read     : %d\n",n);
	fprintf (stderr,">> No. of lines in the data file: %d\n",nline);
	fclose (fp1);

	neq = 2*n;
	nunk= 8;
	if (neq == nunk)
	{
		fprintf (stderr,">> No excess of data. Exact solution will be obtained\n");
	}
	else if (neq < nunk)
	{
		fprintf (stderr,">> Not enough data. For your polynomial option\n");
		fprintf (stderr,">> minimum no. of data points is: %d\n", nunk/2);
		exit (3);
	}
/**********************************************************************/
/*    Dimensioning of variables (using Numerical Recipes routines)    */
/**********************************************************************/
	a  = dmatrix (1,neq, 1,nunk);          /* Matrix of oberv. eq.     */
	at = dmatrix (1,nunk,1,neq);           /* Transpose of a           */
	b  = dmatrix (1,neq, 1,1);             /* 2nd members of oberv. eq.*/
	nn = dmatrix (1,nunk,1,nunk);          /* Matrix of normal eq.     */
	bb = dmatrix (1,nunk,1,1);             /* 2nd members of normal eq.*/
	p  = dvector (1,nunk);                 /* coefficients             */
	q  = dvector (1,nunk);                 /* coefficients (inverse)   */

/********* Elements of matrix a set to zero ***************************/
	for (i=1;i<=neq;i++)
	    for (j=1;j<=nunk;j++)
	        a[i][j]=0.0;

	for (i=0;i<n;i++)
	{
		k1 = 2*i+1;
		k2 = 2*i+2;
		b[k1][1] = u[i];
		b[k2][1] = v[i];
		a[k1][1] = x[i];         a[k2][1]=0;
		a[k1][2] = y[i];         a[k2][2]=0;
		a[k1][3] = 1;            a[k2][3]=0;
		a[k1][4] = 0;            a[k2][4]=x[i];
		a[k1][5] = 0;            a[k2][5]=y[i];
		a[k1][6] = 0;            a[k2][6]=1;
		a[k1][7] = -u[i]*x[i];   a[k2][7]=-v[i]*x[i];
		a[k1][8] = -u[i]*y[i];   a[k2][8]=-v[i]*y[i];
	}

/*--------------------------------------------------------------------*/
/* Least squares method applied to solve the problem                  */
/*      A*p = b                                                       */
/*      (AtA)*p = (At*b)                                              */
/*      p = (AtA)^(-1) * (At*b)                                       */
/* Routine gaussj from Numerical Recipes is used to solve the         */
/* normal equations system. The values of the unknowns replace        */
/* the second members that entered the routine.                       */
/*--------------------------------------------------------------------*/

	transp (a,neq,nunk,at);
	mult   (at,a,nunk,neq,nunk,nn);
	mult   (at,b,nunk,neq,1,bb);
	gaussj (nn,nunk,bb,1);
	for (i=1;i<=nunk;i++) p[i]=bb[i][1];

/*--------------------------------------------------------------------*/
/* CALCULA PARAMETROS DA INVERSA                                      */
/*--------------------------------------------------------------------*/

	q[1] = (     p[5]-p[6]*p[8])/(p[1]*p[5]-p[2]*p[4]);
	q[2] = (    -p[2]+p[3]*p[8])/(p[1]*p[5]-p[2]*p[4]);
	q[3] = (p[2]*p[6]-p[3]*p[5])/(p[1]*p[5]-p[2]*p[4]);
	q[4] = (    -p[4]+p[6]*p[7])/(p[1]*p[5]-p[2]*p[4]);
	q[5] = (     p[1]-p[3]*p[7])/(p[1]*p[5]-p[2]*p[4]);
	q[6] = (p[3]*p[4]-p[1]*p[6])/(p[1]*p[5]-p[2]*p[4]);
	q[7] = (p[4]*p[8]-p[5]*p[7])/(p[1]*p[5]-p[2]*p[4]);
	q[8] = (p[2]*p[7]-p[1]*p[8])/(p[1]*p[5]-p[2]*p[4]);

/**********************************************************************/
/* OUTPUT COEFFICIENTS TO SPECIFIED FILE                              */
/**********************************************************************/

	if (check_arg(argc, argv,'p',&pos)==1)
	{
		fp1 = open_w(argv[pos+1]);
		fprintf (fp1,"%.15g\n",dx);
		fprintf (fp1,"%.15g\n",dy);
		fprintf (fp1,"%.15g\n",du);
		fprintf (fp1,"%.15g\n",dv);
		for (i=1;i<=nunk;i++)
			fprintf (fp1,"%.15g\n",p[i]);
		fclose(fp1);
	}

/**********************************************************************/
/* OUTPUT REPORT WITH RESIDUALS TO SPECIFIED FILE                     */
/**********************************************************************/

	if (check_arg(argc, argv,'r',&pos)==1)
	{
		fp1 = open_w(argv[pos+1]);
		su2 = 0.0;
		sv2 = 0.0;
		for (i=0;i<n;i++)
		{
			ru = (p[1]*x[i]+p[2]*y[i]+p[3])/(p[7]*x[i]+p[8]*y[i]+1)-u[i];
			rv = (p[4]*x[i]+p[5]*y[i]+p[6])/(p[7]*x[i]+p[8]*y[i]+1)-v[i];
			fprintf (fp1,out_fmt,ru,rv);
			su2 = su2 + ru*ru;
			sv2 = sv2 + rv*rv;
		}
		fprintf (fp1,"\n");
		fprintf (fp1,"RMSu:  %11.8f\n",sqrt(su2/n));
		fprintf (fp1,"RMSv:  %11.8f\n",sqrt(sv2/n));
		fclose(fp1);
	}


/**********************************************************************/
/* READ X,Y FROM STDIN AND CALCULATE U,V                              */
/**********************************************************************/

	if (check_arg(argc, argv,'c',&pos)==1)
	{
		while (gets(line)!=0)
		{
			sscanf(line,"%lf %lf",&xx,&yy);
			xx = xx-dx;
			yy = yy-dy;
			uu = (p[1]*xx+p[2]*yy+p[3])/(p[7]*xx+p[8]*yy+1);
			vv = (p[4]*xx+p[5]*yy+p[6])/(p[7]*xx+p[8]*yy+1);
			uu = uu+du;
			vv = vv+dv;
			printf(out_fmt,uu,vv);
		}
	}


/**********************************************************************/
/* RELEASE MEMORY SPACE                                               */
/**********************************************************************/

	free_dmatrix (a ,1,neq,1,nunk);
	free_dmatrix (at,1,nunk,1,neq);
	free_dmatrix (b ,1,neq,1,1);
	free_dmatrix (nn,1,nunk,1,nunk);
	free_dmatrix (bb,1,nunk,1,1);
	free_dvector (p ,1,nunk);
}
/**********************************************************************/
/*---------------------- END OF MAIN PROGRAM -------------------------*/
/**********************************************************************/



/**********************************************************************/
/******                      USAGE                               ******/
/**********************************************************************/
void usage()
{
 fprintf(stderr,"--------------------------------------------------------------\n");
 fprintf(stderr,"  Transformacao projectiva                                    \n");
 fprintf(stderr,"    col=(p1*E+p2*N+p3)/(p7*E+p8*N+1)                          \n");
 fprintf(stderr,"    row=(p4*E+p5*N+p6)/(p7*E+p8*N+1)                          \n");
 fprintf(stderr,"--------------------------------------------------------------\n");
 fprintf(stderr,"  USAGE: prj FILE [-r file] [-p file] [-c] [-d dec]           \n");
 fprintf(stderr,"--------------------------------------------------------------\n");
 fprintf(stderr,"   FILE   Ficheiro de texto (1 ponto por linha: E N col row)  \n");
 fprintf(stderr,"   -r     Opcao para escrita de residuos em ficheiro          \n");
 fprintf(stderr,"   -p     Opcao para escrita de parametros em ficheiro        \n");
 fprintf(stderr,"   -c     Opcao para converter E,N para col,row (stdin,stdout)\n");
 fprintf(stderr,"   -d     dec=numero de casas decimais escritas (default 3)   \n");
 fprintf(stderr,"--------------------------------------------------------------\n");
 exit(0);
}


//----------------------------------------------------------------------------------
// MYIO
//----------------------------------------------------------------------------------


FILE *open_w(file)
char file[];
{
	FILE *fp;
	if (  (fp=fopen(file,"w"))==NULL  )
	{
		fprintf(stderr,"Could not open file %s for output\n",file);
		exit(1);
	}
	return(fp);
}

FILE *open_r(file)
char file[];
{
	FILE *fp;
	if (  (fp=fopen(file,"r"))==NULL  )
	{
		fprintf(stderr,"Could not open file %s for input\n",file);
		exit(1);
	}
	return(fp);
}


//----------------------------------------------------------------------------------
// NRUTIL
//----------------------------------------------------------------------------------

void nrerror(error_text)
char error_text[];
{
    /*void exit();*/

    fprintf(stderr,"Numerical Recipes run-time error...\n");
    fprintf(stderr,"%s\n",error_text);
    fprintf(stderr,"...now exiting to system...\n");
    exit(1);
}



float *vector(nl,nh)
int nl,nh;
{
    float *v;

    v=(float *)malloc((unsigned) (nh-nl+1)*sizeof(float));
    if (!v) nrerror("allocation failure in vector()");
    return v-nl;
}

int *ivector(nl,nh)
int nl,nh;
{
    int *v;

    v=(int *)malloc((unsigned) (nh-nl+1)*sizeof(int));
    if (!v) nrerror("allocation failure in ivector()");
    return v-nl;
}

short *svector(nl,nh)
int nl,nh;
{
    short *v;

    v=(short *)malloc((unsigned) (nh-nl+1)*sizeof(short));
    if (!v) nrerror("allocation failure in ivector()");
    return v-nl;
}

double *dvector(nl,nh)
int nl,nh;
{
    double *v;

    v=(double *)malloc((unsigned) (nh-nl+1)*sizeof(double));
    if (!v) nrerror("allocation failure in dvector()");
    return v-nl;
}



float **matrix(nrl,nrh,ncl,nch)
int nrl,nrh,ncl,nch;
{
    int i;
    float **m;

    m=(float **) malloc((unsigned) (nrh-nrl+1)*sizeof(float*));
    if (!m) nrerror("allocation failure 1 in matrix()");
    m -= nrl;

    for(i=nrl;i<=nrh;i++) {
        m[i]=(float *) malloc((unsigned) (nch-ncl+1)*sizeof(float));
        if (!m[i]) nrerror("allocation failure 2 in matrix()");
        m[i] -= ncl;
    }
    return m;
}

double **dmatrix(nrl,nrh,ncl,nch)
int nrl,nrh,ncl,nch;
{
    int i;
    double **m;

    m=(double **) malloc((unsigned) (nrh-nrl+1)*sizeof(double*));
    if (!m) nrerror("allocation failure 1 in dmatrix()");
    m -= nrl;

    for(i=nrl;i<=nrh;i++) {
        m[i]=(double *) malloc((unsigned) (nch-ncl+1)*sizeof(double));
        if (!m[i]) nrerror("allocation failure 2 in dmatrix()");
        m[i] -= ncl;
    }
    return m;
}

short **smatrix(nrl,nrh,ncl,nch)
int nrl,nrh,ncl,nch;
{
    int i;
    short **m;

    m=(short **) malloc((unsigned) (nrh-nrl+1)*sizeof(short*));
    if (!m) nrerror("allocation failure 1 in smatrix()");
    m -= nrl;

    for(i=nrl;i<=nrh;i++) {
        m[i]=(short *) malloc((unsigned) (nch-ncl+1)*sizeof(short));
        if (!m[i]) nrerror("allocation failure 2 in smatrix()");
        m[i] -= ncl;
    }
    return m;
}

int **imatrix(nrl,nrh,ncl,nch)
int nrl,nrh,ncl,nch;
{
    int i,**m;

    m=(int **)malloc((unsigned) (nrh-nrl+1)*sizeof(int*));
    if (!m) nrerror("allocation failure 1 in imatrix()");
    m -= nrl;

    for(i=nrl;i<=nrh;i++) {
        m[i]=(int *)malloc((unsigned) (nch-ncl+1)*sizeof(int));
        if (!m[i]) nrerror("allocation failure 2 in imatrix()");
        m[i] -= ncl;
    }
    return m;
}



float **submatrix(a,oldrl,oldrh,oldcl,oldch,newrl,newcl)
float **a;
int oldrl,oldrh,oldcl,oldch,newrl,newcl;
{
    int i,j;
    float **m;

    m=(float **) malloc((unsigned) (oldrh-oldrl+1)*sizeof(float*));
    if (!m) nrerror("allocation failure in submatrix()");
    m -= newrl;

    for(i=oldrl,j=newrl;i<=oldrh;i++,j++) m[j]=a[i]+oldcl-newcl;

    return m;
}



void free_vector(v,nl,nh)
float *v;
int nl,nh;
{
    free((char*) (v+nl));
}

void free_ivector(v,nl,nh)
int *v,nl,nh;
{
    free((char*) (v+nl));
}

void free_svector(v,nl,nh)
short *v;
int nl,nh;
{
    free((char*) (v+nl));
}

void free_dvector(v,nl,nh)
double *v;
int nl,nh;
{
    free((char*) (v+nl));
}



void free_matrix(m,nrl,nrh,ncl,nch)
float **m;
int nrl,nrh,ncl,nch;
{
    int i;

    for(i=nrh;i>=nrl;i--) free((char*) (m[i]+ncl));
    free((char*) (m+nrl));
}

void free_dmatrix(m,nrl,nrh,ncl,nch)
double **m;
int nrl,nrh,ncl,nch;
{
    int i;

    for(i=nrh;i>=nrl;i--) free((char*) (m[i]+ncl));
    free((char*) (m+nrl));
}

void free_imatrix(m,nrl,nrh,ncl,nch)
int **m;
int nrl,nrh,ncl,nch;
{
    int i;

    for(i=nrh;i>=nrl;i--) free((char*) (m[i]+ncl));
    free((char*) (m+nrl));
}

void free_smatrix(m,nrl,nrh,ncl,nch)
short **m;
int nrl,nrh,ncl,nch;
{
    int i;

    for(i=nrh;i>=nrl;i--) free((short*) (m[i]+ncl));
    free((char*) (m+nrl));
}



void free_submatrix(b,nrl,nrh,ncl,nch)
float **b;
int nrl,nrh,ncl,nch;
{
    free((char*) (b+nrl));
}



float **convert_matrix(a,nrl,nrh,ncl,nch)
float *a;
int nrl,nrh,ncl,nch;
{
    int i,j,nrow,ncol;
    float **m;

    nrow=nrh-nrl+1;
    ncol=nch-ncl+1;
    m = (float **) malloc((unsigned) (nrow)*sizeof(float*));
    if (!m) nrerror("allocation failure in convert_matrix()");
    m -= nrl;
    for(i=0,j=nrl;i<=nrow-1;i++,j++) m[j]=a+ncol*i-ncl;
    return m;
}



void free_convert_matrix(b,nrl,nrh,ncl,nch)
float **b;
int nrl,nrh,ncl,nch;
{
    free((char*) (b+nrl));
}
unsigned char **bmatrix(nrl,nrh,ncl,nch)
int nrl,nrh,ncl,nch;
{
    int i;
    unsigned char **m;

    m=(unsigned char **) malloc((unsigned) (nrh-nrl+1)*sizeof(char*));
    if (!m) nrerror("allocation failure 1 in 1matrix()");
    m -= nrl;

    for(i=nrl;i<=nrh;i++) {
        m[i]=(unsigned char *) malloc((unsigned) (nch-ncl+1)*sizeof(char));
        if (!m[i]) nrerror("allocation failure 2 in bmatrix()");
        m[i] -= ncl;
    }
    return m;
}
void free_bmatrix(m,nrl,nrh,ncl,nch)
unsigned char **m;
int nrl,nrh,ncl,nch;
{
    int i;

    for(i=nrh;i>=nrl;i--) free((unsigned char*) (m[i]+ncl));
    free((unsigned char*) (m+nrl));
}

unsigned char *bvector(nl,nh)
int nl,nh;
{
    unsigned char *v;

    v=(unsigned char *)malloc((unsigned) (nh-nl+1)*sizeof(char));
    if (!v) nrerror("allocation failure in bvector()");
    return v-nl;
}
void free_bvector(v,nl,nh)
unsigned char *v;
int nl,nh;
{
    free((unsigned char*) (v+nl));
}


//----------------------------------------------------------------------------------
// NR
//----------------------------------------------------------------------------------

void gaussj(a,n,b,m)
double **a,**b;
int n,m;
{
	int *indxc,*indxr,*ipiv;
	int i,icol,irow,j,k,l,ll,*ivector();
	double big,dum,pivinv;
	void nrerror(),free_ivector();

	indxc=ivector(1,n);
	indxr=ivector(1,n);
	ipiv=ivector(1,n);
	for (j=1;j<=n;j++) ipiv[j]=0;
	for (i=1;i<=n;i++) {
		big=0.0;
		for (j=1;j<=n;j++)
			if (ipiv[j] != 1)
				for (k=1;k<=n;k++) {
					if (ipiv[k] == 0) {
						if (fabs(a[j][k]) >= big) {
							big=fabs(a[j][k]);
							irow=j;
							icol=k;
						}
					} else if (ipiv[k] > 1) nrerror("GAUSSJ: Singular Matrix-1");
				}
		++(ipiv[icol]);
		if (irow != icol) {
			for (l=1;l<=n;l++) SWAP(a[irow][l],a[icol][l])
			for (l=1;l<=m;l++) SWAP(b[irow][l],b[icol][l])
		}
		indxr[i]=irow;
		indxc[i]=icol;
		if (a[icol][icol] == 0.0) nrerror("GAUSSJ: Singular Matrix-2");
		pivinv=1.0/a[icol][icol];
		a[icol][icol]=1.0;
		for (l=1;l<=n;l++) a[icol][l] *= pivinv;
		for (l=1;l<=m;l++) b[icol][l] *= pivinv;
		for (ll=1;ll<=n;ll++)
			if (ll != icol) {
				dum=a[ll][icol];
				a[ll][icol]=0.0;
				for (l=1;l<=n;l++) a[ll][l] -= a[icol][l]*dum;
				for (l=1;l<=m;l++) b[ll][l] -= b[icol][l]*dum;
			}
	}
	for (l=n;l>=1;l--) {
		if (indxr[l] != indxc[l])
			for (k=1;k<=n;k++)
				SWAP(a[k][indxr[l]],a[k][indxc[l]]);
	}
	free_ivector(ipiv,1,n);
	free_ivector(indxr,1,n);
	free_ivector(indxc,1,n);
}

#undef SWAP

// MYFUNC2

/*****************************************************************************/
// CONTAGEM DE LINHAS DE UM FICHEIRO DE TEXTO
/*****************************************************************************/
int conta_linhas(file)
char file[];
{
	int n_linhas;
	char line[1000];
	FILE *fp1;

	fp1=open_r(file);
	n_linhas=0;
	while(fgets(line,500,fp1)!=0)
	{
		n_linhas++;
	}
	fclose(fp1);
	return(n_linhas);
}

/*****************************************************************************/
// CONTAGEM DE LINHAS DE UM FICHEIRO DE TEXTO NAO INICIADAS POR CARDINAL
/*****************************************************************************/
int conta_linhas_val(file)
char file[];
{
	int n_linhas;
	char line[1000];
	FILE *fp1;

	fp1=open_r(file);
	n_linhas=0;
	while(fgets(line,500,fp1)!=0)
	{
		if (line[0]!='#') n_linhas++;
	}
	fclose(fp1);
	return(n_linhas);
}


/*****************************************************************************/
// CALCULO APROXIMADO DE DISTANCIA GEODESICA ENTRE DOIS PONTOS
/*****************************************************************************/
double distgeo(lon1,lat1,lon2,lat2)
double  lon1,lat1,lon2,lat2;
{
	double aux,sinl,latm,N,M,dx,dy;

	lat1 = lat1*CGR;
	lat2 = lat2*CGR;
	lon1 = lon1*CGR;
	lon2 = lon2*CGR;
	latm = (lat1+lat2)*0.5;
	sinl = sin(latm);
	aux  = sqrt(1-E2*sinl*sinl);
	N    = A/aux;
	M    = A*(1-E2)/aux/aux/aux;
	dx   = (lon2-lon1)*N*cos(latm);
	dy   = (lat2-lat1)*M;
	return(sqrt(dx*dx+dy*dy));
}

/*****************************************************************************/
// CONVERTER TEMPO HH:MM:SS.SSS para TEMPO EM SEGUNDOS DO DIA
/*****************************************************************************/
double sec_day(str1)
char str1[];
{
	double hh,mm,ss,time;
	int time_len,j;
	time_len=strlen(str1);
	for(j=0;j<time_len;j++)
	{
		if(str1[j]==':')str1[j]=' ';
	}
	sscanf(str1," %lf  %lf  %lf",&hh,&mm,&ss);
	return(hh*3600+mm*60+ss);
}

/*****************************************************************************/
//  MATRIX TRANSPOSTA
/*****************************************************************************/
int transp(a, n, m, at)
int     n, m;
double  **a, **at;
{
	int     i, j;
	for (i = 1; i <= n; i++)
		for (j = 1; j <= m; j++)
			at[j][i] = a[i][j];
	return(0);
}

/*****************************************************************************/
//  MULTIPLICATION OF MATRICES: PROD(NXP) = MAT1(NXM) * MAT2(MXP)
/*****************************************************************************/
int mult(mat1, mat2, n, m, p, prod)
int     n, m, p;
double  **mat1, **mat2, **prod;
{
	int i, j, k;
	for (i = 1; i <= n; i++) {
		for (j = 1; j <= p; j++) {
			prod[i][j] = 0.0;
			for (k = 1; k <= m; k++) {
				prod[i][j] += mat1[i][k] * mat2[k][j];
			}
		}
	}
	return(0);
}


/*****************************************************************************/
//  CHECK ARGUMENTS
/*****************************************************************************/
int check_arg(argc, argv,caract,pos)
int argc,*pos;
char **argv, caract;
{
	int i,value;

//	printf("%c\n",caract);
	value=0;
	for(i=1;i<argc;i++)
	{
		if ((argv[i][0]=='-')&&(argv[i][1]==caract))
		{
			value=1;
			*pos=i;
			break;
		}
	}
	return(value);
}


/*****************************************************************************/
//  LEITURA DE CABECALHO DE IMAGEM PPM BINARIO
/*****************************************************************************/
int read_ppm_hdr(fp1,cols,rows)
FILE *fp1;
int  *cols,*rows;
{
	char line[200];
	fgets(line,200,fp1);
	if( (line[0]!='P')||(line[1]!='6') )
	{
		fprintf(stderr,"Imagem n�o � do tipo PPM binario.\n");
		exit(1);
	}
	for(;;)
	{
		fgets(line,200,fp1);
		if(line[0]!='#') break;
	}
	sscanf(line,"%d %d",cols,rows);
	fgets(line,200,fp1);
	return(0);
}

/*****************************************************************************/
//  ESCRITA DE CABECALHO DE IMAGEM PPM BINARIO
/*****************************************************************************/
int write_ppm_hdr(fp1,cols,rows)
FILE *fp1;
int cols,rows;
{
	char line[200];
	fprintf(fp1,"P6\n");
	fprintf(fp1,"# Created by JAG\n");
	fprintf(fp1,"%d %d\n",cols,rows);
	fprintf(fp1,"255\n");
	return(0);
}


/*****************************************************************************/
//  LEITURA DE CABECALHO DE IMAGEM PGM BINARIO
/*****************************************************************************/
int read_pgm_hdr(fp1,cols,rows)
FILE *fp1;
int  *cols,*rows;
{
	char line[200];
	fgets(line,200,fp1);
	if( (line[0]!='P')||(line[1]!='5') )
	{
		fprintf(stderr,"Imagem n�o � do tipo PGM binario.\n");
		exit(1);
	}
	for(;;)
	{
		fgets(line,200,fp1);
		if(line[0]!='#') break;
	}
	
	sscanf(line, "%d %d", cols, rows);
	fgets(line, 200, fp1);
	return(0);
}

/*****************************************************************************/
//  ESCRITA DE CABECALHO DE IMAGEM PGM BINARIO
/*****************************************************************************/
write_pgm_hdr(fp1,cols,rows)
FILE *fp1;
int cols,rows;
{
	char line[200];
	fprintf(fp1,"P5\n");
	fprintf(fp1,"# Created by JAG\n");
	fprintf(fp1,"%d %d\n",cols,rows);
	fprintf(fp1,"255\n");
	return(0);
}
