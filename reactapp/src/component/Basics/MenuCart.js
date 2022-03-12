import React from 'react'

const MenuCart = ({menuData}) => {
    return (
        <>
        <section className="main-card--container">
        {menuData.map((curElem)=>{
            const{id,name,category,image,description}=curElem;

            return(
                <>
                     <div className="card-containeer" key={id}>
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card circle subtle" >{id}</span>
                        <span className="card-number card circle subtle">{curElem.category}</span>
                        <h2 className="card-title">{curElem.name}</h2>
                        <span className="card-description subtle"> 
                        {curElem.description}
                        </span>
                        <div className="card-read">Read</div>
                    </div>
                    <img src={image} alt="images" classname="card-media"/>
                    
                    <span className="card-tag subtle">order Now</span>
                </div>
            </div>
                </>
            );
        })}
            </section>
        </>
    )
}

export default MenuCart
