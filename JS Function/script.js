const numbers2 = ["5", "15", "25"];
        function myfunction()
        {
        const numbers = ["11", "22", "33", "44", "55", "66", "77", "88", "99"];
        const merged = [...numbers, ...numbers2];
        let index = numbers.indexOf (prompt());
        document.write(merged)
         document.getElementById("demo").innerHTML = index;
        }
        myfunction();