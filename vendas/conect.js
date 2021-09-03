var mangoose =require ("mongoose");

//then - então
//catch - pegar

mongoose.connect("mongodb+srv://ricardo_nunes:ricardo_nunes@cluster0.jlykd.mongodb.net/vendas?retryWrites=true&w=majority").then(()=>{
    console.log("banco conectado!")
}).catch((err)=>{
    console.log("Deu ruim!" +err)
})