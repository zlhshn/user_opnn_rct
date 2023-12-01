import data from "../data";
import CardStyled from "../scss/card.module.scss";

const Card = () => {
    console.log(data);
  return (
    <main>
{data.map(({name,job,comment,id,img,})=>(

<div key={id} className={CardStyled.card}>

<h2 className={CardStyled["title"]}>{name}</h2>
<h3 className={CardStyled["job"]}>{job}</h3>
<img className={CardStyled["img-style"]} src={img} alt={name} />
<p className={CardStyled.comment}>{comment}</p>
<div>
    <button className={CardStyled["btn-small"]}>Small</button>
    <button className={CardStyled["btn-large"]}>Large</button>
</div>



</div>


))}




    </main>
  )
}

export default Card