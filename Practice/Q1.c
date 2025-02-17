// #include<stdio.h>
// int main(){

//  int num ;
//  printf("Enter the number: ");
//  scanf("%d",&num);
//  if (num >= 0)
//  {
//     printf("Number is positive \n");
//    if (num%2==0)
//    {
//     printf("Even number");
//    }else{
//     printf("Odd number");
//    }
//  }else{
//     printf("Number is  Negative ");
//  }
 
// int a,b,c,num; 
//   printf("Valur of a : \n");
//   scanf("%d",&a);
//   printf("Valur of b : \n");
//   scanf("%d",&b);
//   printf("Valur of c : \n");
//   scanf("%d",&c);
//   printf("Valur of num : \n");
//   scanf("%d",&num);
  
// if (num==a*a*a+b*b*b+c*c*c)
// {
//     printf("given number is Armstrong number \n");
// }else{
//     printf("given number is not Armstrong number");
// }

// int num ;

// printf("Enter the Number: ");
// scanf("%d",&num);

// if (num>0)
// {
//     printf("This Number is Natural Number");
// }else{
//     printf("The Number is not Natural Number");
// }

// // return 0;







// int n ,num ;
// printf("Enter number :");
// scanf("%d",&num);
// for (int i=1; i <=10; i++)
// {
//    printf("%d \n ",num*i);
// }
 
//  int a;
// do
// {
//    printf("Enter Number : ");
//   scanf("%d",&a);
//   printf("%d \n",a);
//    if (a % 7 == 0 )
//    {
//       break;
//    }
// } while(1);
// printf("Thank You");





// for (int i = 5; i <= 50; i++)
// {
//    if (i % 2 != 0 )
//    {
//    printf("%d\n",i);    

//    }
// }
   




// int sum = 0; 



// for (int i = 5; i <= 50; i++)
// {
//   sum = sum + i ;
// }
// printf("%d",sum );

// int n ;
// do
// {
//     printf("Enter the Number :");
//     scanf("%d",&n);
//     printf("%d\n",n);
//     if (n % 7 ==0)
//     {
//         break;
//     }
    
// } while (1);
//  printf("loop end");
 
// for (int i = 5; i <= 50; i++)
// {
//     if (i %2 ==0)
//     {
//         continue;
//     }
    
//     printf("%d\n",i);
 
// }

// int a ;
// printf("Enter Number:");
// scanf("%d",&a);
// int fact = 1 ;
// for (int i = 1; i <= a ; i++)
// {
//     fact = fact * i ;
// }

//     printf("%d",fact);

// int a;
// printf("enter number :");
// scanf("%d",&a);

// for (int i = 10; i >= 1 ; i--)
// {
//     printf("%d \n",a * i);
// }
// int sum = 0 ;

// for (int i =1; i <= 2; i++)
// {
//     for (int j=1;j<= 3; j++)
//     {
//         printf("*",j);
//     }
//     printf("\n");
// }


// // Q7.

// #include<stdio.h>
// main(){ 
// for (int i = 1; i <=5; i++)
// {
//     for (int s=4;s>=i;s--)
//     {
//         printf(" ");
//     }
// for (int j=1;j<=i;j++)
// {
//     if (i==3&&(j==2)||i==4&&(j>1&&j<4))
//     {
//         printf("  ");
//     }
// else{
//     printf("* ");
// }    
// }
//     printf("\n");
// }


//  return 0;
// }

// // Q8.

// #include<stdio.h>
// main(){ 
// for (int i = 1; i <=5; i++)
// {
//     for (int s=i;s>=1;s--)
//     {
//         printf(" ");
//     }
// for (int j=5;j>=i;j--)
// {
//     if (i==2&&(j<5&&j>2)||i==3&&(j<5&&j>3))
//     {
//         printf("  ");
//     }
// else{
//     printf("* ");
// }
// }
//     printf("\n");
// }
//  return 0;
// }




// #include<stdio.h>
// void main(){
//     int row,col;
//     printf("Enter size of row :");
//     scanf("%d",&row);
//     printf("Enter size of Column :");
//     scanf("%d",&col);
//     int arr[row][col];
//     for (int i = 0; i <row; i++)
//     {
//         for (int j=0;j<col;j++)
//         {
//             printf("Enter the size of array:");
//             scanf("%d",&arr[i][j]);
//         }    
//         printf("\n");
//     }
//     printf("The transpose matrix of an array:\n");
//         for (int i = 0; i <col; i++)
//     {
//         for (int j=0;j<row;j++)
//         {
//             printf("%d ",arr[j][i]);
//         }            
//         printf("\n");
//     }
// }

// #include<stdio.h>
// main(){
// do
// {
//     int n;
//     printf("Enter the Number :");
//     scanf("%d",&n);
// if (n%7==0)
// {
//     break;
// }


// } while (1);
// printf("thank you");
// }

// #include<stdio.h>
// table(int n ){
//     int tab ;
//     for (int i = 1; i <=10; i++)
//     {
//         tab=n*i;
//         // printf("%d*%d= %d\n",n,i,tab);
//         return tab ;
//     }
    
// }

// int  main(){
//    int n;
//    printf("Enter number :");
//    scanf("%d",&n);

//     // for (int i = 5; i <=50; i++)
//     // {
//     //     if (i%2!=0)
//     //     {
//     //         printf("%d\n",i);
//     //     }
//     // }
//     table(n);
//            printf("%d*%d= %d\n",n,i,tab);
//            return 0;
// }


// #include<stdio.h>
// int factorial(int a){
// int  facto=(a-1);
// int fact=facto*a;
// return fact ;
// }
// int main(){
//     int a;
//     printf("Enter a number:");
//     scanf("%d",&a);
//     factorial(a);
//     printf("Factorial is :%d",factorial(a));


//     return 0;
// }


#include<stdio.h>
// fact(int x){
//     if (x>=1)
//     {
//         return x*fact(x-1);
//     }else{
//         return 1;
//     }   
// }
// sum(int n){
//     if (n==1)
//     {
//         return 1;
//     }
    
// int sumn=sum(n-1);
// int sum=sumn+n;
//     return sum ;
// }
temp(float c){
    if (c == 0)
    {
        return 32 ;
    }else{
        return (9.0 / 5.0 * c) + 32.0;
    }
}
 main(){
    // int x;
    // printf("Enter a Number :");
    // scanf("%d",&x);
    // // printf("Factorial is :%d",fact(x));
    // printf
    // ("Sum is :%d",sum(x));
    float c ;
    printf("enter Temperature in C:");
    scanf("%f",&c);
    printf("The temperature is in F :%f",temp(c));
}
