// #include<stdio.h>
// float temperature(float temp_c){
// if (temp_c == 0)
// {
//     return 32;
// }else{
//     return (1.8 * temp_c)+32 ;
// }
// }
// int  main(){
//     float temp_c ;
//    printf("Enter Temperature in Celsius :");
//    scanf("%f",&temp_c);
//    temperature(temp_c);
//     printf("Temperature in Ferenhit :%2f",temperature(temp_c));
//     return 0;
// }

// #include<stdio.h>
// int percentage(int math , int sci , int sanskrit ){
//     return (sci + math + sanskrit)/3 ;
// }

// int main(){
// int math ,sci , sanskrit ;
// printf("Enter Maths mark:");
// scanf("%d",&math);
// printf("Enter Science mark:");
// scanf("%d",&sci);
// printf("Enter Sanskrit mark:");
// scanf("%d",&sanskrit);
// percentage(math , sci , sanskrit );
// printf("The persentage is :%d",percentage(math ,sci , sanskrit));

// return 0;
// }

#include<stdio.h>
int fibonachi(int n){

if (n==0)
{
    return 0;
}if (n==1)
{
    return 1 ;
}
int fibonachiM1=fibonachi(n-1);
int fibonachiM2=fibonachi(n-2);
int fibonachiN=fibonachiM1+fibonachiM2;

return fibonachiN ;

}

int main(){
int n ;
printf("Enter term of fibonachi series :");
scanf("%d",&n);
fibonachi(n);
printf("The fibonachi series is :%d",fibonachi(n));

return 0;
}

// #include<stdio.h>
// square(int n){
//    n=n*n;
//    printf("The square of number is :%d\n",n);
// }
// _square(int *n){
//     *n = *n * *n ;
//     printf(" square  :%d\n",*n);
// }
// int main(){
// int number = 4 ;
// square(number);
// printf("number :%d\n",number);
// _square(&number);
// printf("number :%d\n",number);
// return 0;
// }