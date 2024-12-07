document.getElementById("clearValues").addEventListener("click", ()=>
    {
        document.getElementById("naturalNumber").value='';
        document.getElementById("factorial").value='';
        document.getElementById("sum").value='';
        document.getElementById("average").value='';
    });

    document.getElementById("compute").addEventListener("click", ()=>
    {
        var n, i, j, factorial, sum1,sum2, average;

        n = document.getElementById("naturalNumber").value*1;
        i = 1;
        j = 1;
        factorial = 1;
        sum1 = 0;
        sum2 = 0;

        while (i <= n)
        {
            factorial*= i;
            i++;
        }

        do{
            sum1+=j;
            j++;
        }while(j<=n)

        for(i=1;i<=n;i++)
        {
            sum2+=i;
            average = sum2 / i
        }

            document.getElementById("factorialText").innerText = "The factorial of "+n+" is:";
            document.getElementById("sumText").innerText = "The sum of the first " + n + " numbers is:" ;
            document.getElementById("averageText").innerText = "The average of the first " + n + " numbers is:";
            document.getElementById("factorial").value = factorial;
            document.getElementById("sum").value = sum1;
            document.getElementById("average").value = average;
        });