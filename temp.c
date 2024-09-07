#include<stdio.h>
int main() {
    int i = 1024;
    int count = 0;
    for (; i; i >>= 1) {
        count = count + 1;
    };
    printf("%d\n", count);
    return 0;
}