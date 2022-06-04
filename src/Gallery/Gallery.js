import React from 'react';
import _ from "lodash"
const Gallery = (props) => {
    return (
        <div className={'flex flex-col'}>
            <div>
                <div>
                    <img  src={props.selectedImage}/>
                </div>
            </div>
            <div className={'flex gap-4'}>
                {
                    !_.isEmpty(props.images)?
                       props.images.map((v,i)=>(
                           <div key={i} className={''}>
                               {/*<h2 className={'text-sm'}>Color:Blue</h2>*/}
                               <div className={'mt-4'}>
                                   <div className={'border border-gray-400 ml-2'}>
                                       <div>
                                           <img onClick={()=>props.handleSelectedImage(v.url)}  className={'h-20 w-32 object-content'} src={v.thumb}/>
                                       </div>

                                   </div>

                               </div>
                           </div>
                       )):<></>
               }
            </div>
        </div>
    );
};

export default Gallery;