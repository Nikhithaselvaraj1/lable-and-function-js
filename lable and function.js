<!DOCTYPE html>
<html>
    <style>
        body{
                background-image: url('https://images.unsplash.com/photo-1516557070061-c3d1653fa646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60');
                background-repeat: cover    ;
        }
        fieldset{
                background-color: gray;
                position:absolute;
                top: 150px;
                left: 150px;
                height:65%;
                width:65%;
        }
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            } 
            form{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            }
        input{
            display: flex;
            font-size: 20px;
            text-align: center; 
            margin:5px;
            height: 44px;
            width: 350px;
            }
        input[type="submit"], input[type="reset"]{
            display: flex;
            align-items: center;
            width:150px;
            height: 44px;
            color:black;
        } 
        textarea{
            display: flex;
            font-size: 20px;
            text-align: center; 
            height: 44px;
            width: 350px;

        }


    </style>
 <body> 
 <fieldset>
    <div><h1>Employee Login</h1></div>
        <br>
        <form  onsubmit="return submit_()" action="js-employee details.html">
            <label>UserName   :</label>
            <input type="text" id="name" >
            <br>
            <label>Password&nbsp;   : </label>
            <input type="password" id="password" >
            <br>
            <br>
            <input type="reset" id="reset"/>
            <input type="submit" value="sub" id="submit" > 
        </form>
        </fieldset>
        <script>
            function submit_(){
                let Name = document.getElementById("name").value;
                var Pwd = document.getElementById("password").value;
                if ((/^[ -=+*#$%^&(){}[]\|\?><,;:"']+$/).test(Name)||Name==null){
                    alert("Invalid Username");
                    return false;
                }
                if (Pwd.length<=6||Pwd==null){
                    alert("Password Lenght not sufficient, must be minimum of 7 characters");
                    return false;
                }
            }
        </script>
</body>  
</html>
