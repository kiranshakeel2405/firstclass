let cards = [
    {
        id :1,
        title : "Nature 1",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem libero quae numquam non nam, quidem, adipisci recusandae quam consequatur perspiciatis molestiae tempore accusamus deleniti sit! Dolore molestias delectus ducimus quas?",
        img:"images/img.jpg"
    },
    {
        id :2,
        title : "Nature 2",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem libero quae numquam non nam, quidem, adipisci recusandae quam consequatur perspiciatis molestiae tempore accusamus deleniti sit! Dolore molestias delectus ducimus quas?",
        img:"images/img.jpg"
    },
    {
        id :3,
        title : "Nature 3",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem libero quae numquam non nam, quidem, adipisci recusandae quam consequatur perspiciatis molestiae tempore accusamus deleniti sit! Dolore molestias delectus ducimus quas?",
        img:"images/img.jpg"
    },
    {
        id :4,
        title : "Nature 4",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem libero quae numquam non nam, quidem, adipisci recusandae quam consequatur perspiciatis molestiae tempore accusamus deleniti sit! Dolore molestias delectus ducimus quas?",
        img:"images/img.jpg"
    },
    {
        id :5,
        title : "Nature 5",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem libero quae numquam non nam, quidem, adipisci recusandae quam consequatur perspiciatis molestiae tempore accusamus deleniti sit! Dolore molestias delectus ducimus quas?",
        img:"images/img.jpg"
    },
    {
        id :6,
        title : "Nature 6",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem libero quae numquam non nam, quidem, adipisci recusandae quam consequatur perspiciatis molestiae tempore accusamus deleniti sit! Dolore molestias delectus ducimus quas?",
        img:"images/img.jpg"
    }

];
for(var i = 0 ; i < cards.length ; i++ )
{
    document.getElementById("cards").innerHTML += `
    <div class="col-md-4 mt-5">
        <div class="card" style="width: 18rem;">
            <img src="${cards[i].img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${cards[i].title}</h5>
            <p class="card-text">${cards[i].desc}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    `
}