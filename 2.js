<html>
    <head>

    </head>
    <body>
        <script>
 class Car{
     constructor( name, year){ 
        this name = name;
        this year = year;
     }
     display(){
         return `name=${this.name},year=${
        this.year}`;
     },
      age(){
         let date= new date();
        return date.getFullYear()-this.year;
      }
 };
const obj1=new car ("Ford" ,2015);

console.log($(obj1.display()), $(obj1.age()));

</script>

    </body>
</html>