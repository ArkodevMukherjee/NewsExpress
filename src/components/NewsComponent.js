import React, { Component } from 'react'

const NewsComponent=(props)=> {

  
            let {imgUrl,title,desc,author,publishedAt,urlTo}=props;
      
        return (
            <div style={{display:"flex",flexDirection:"row",padding:"10px"}}>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p>Published by {!author?"Unknown time":author} on {!publishedAt?"Time Not found":publishedAt}</p>
                    <a href={urlTo} className="btn btn-success">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsComponent
