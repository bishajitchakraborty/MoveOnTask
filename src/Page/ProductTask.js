import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash"
import {getProduct} from "../Service/Action";
 import img_1 from "../image/1.webp"
 import img_2 from "../image/2.jpg"
import  Gallery from "../Gallery/Gallery"

const ProductTask = () => {
    const product = useSelector(store=>store.product)
    console.log(product)
    const [selectedImage, setSelectedImage] = useState("")
    const [selectedPrice, setSelectedPrice] = useState("")
    const [selectedPriceOld, setSelectedPriceOld] = useState("")
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedShoeSize, setSelectedShoeSize] = useState("")

    // <---------------------------------Picture Handeler--------------------------->
   function handleSelectedImage(url){
        setSelectedImage(url)
   }

    // <---------------------------------Color Handeler--------------------------->
    function handleSelectedColor(name){
        setSelectedColor(name)
    }

    // <---------------------------------Shoe Size Handeler--------------------------->
    function handleSelectedShoeSize(name){
        setSelectedShoeSize(name)
    }

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    },[dispatch])

    useEffect(()=>{
        if(!_.isEmpty(product.data)){
            if(!_.isEmpty(product.data.gallery)){
                setSelectedImage(product.data.gallery[0].url)
            }
         }
        // console.log(selectedImage)

    },[product])

    useEffect(()=>{
        if(!_.isEmpty(product.data)){
            if(!_.isEmpty(product.data.variation)){
                if( !_.isEmpty(product.data.variation.skus)){
                    setSelectedPrice(product.data.variation.skus[0].price.discounted)
                }

            }
        }
        console.log(selectedPrice)

    },[product])

    useEffect(()=>{
        if(!_.isEmpty(product.data)){
            if(!_.isEmpty(product.data.variation)){
                if( !_.isEmpty(product.data.variation.skus)){
                    setSelectedPriceOld(product.data.variation.skus[0].price.old)
                }
            }
        }
        console.log(selectedPriceOld)

    },[product])




    useEffect(()=>{
        if(!_.isEmpty(product.data)){
            if(!_.isEmpty(product.data.variation)){
                if( !_.isEmpty(product.data.variation.props)){
                    setSelectedColor(product.data.variation.props[0].values[0].name)
                }
            }
        }
        console.log(selectedColor)

    },[product])




    useEffect(()=>{
        if(!_.isEmpty(product.data)){
            if(!_.isEmpty(product.data.variation)){
                if( !_.isEmpty(product.data.variation.props)){
                    setSelectedShoeSize(product.data.variation.props[1].values[1].name)
                }
            }
        }
        console.log(selectedColor)

    },[product])
    return (
        <div>
            <div className={'w-4/5 mx-auto'}>
                <h2 className={'text-center text-blue-900 py-16 text-2xl'}>Task</h2>
                <div className={'flex w-4/5'}>
                    <div className={'w-2/5 mx-4'}>
                        <Gallery images={product.data.gallery} selectedImage={selectedImage}   handleSelectedImage={handleSelectedImage} />
                    </div>
                    <div className={'w-3/5 p-2 pt-10'}>
                        <div>
                            {
                                product.loading?
                                    <>

                                    </>:
                                    <>
                                        { !_.isEmpty(product.data)?

                                            <p className={'text-sm pb-6'}>
                                                {product.data.title}
                                            </p>
                                            :<></>
                                        }
                                    </>

                            }
                            <p className={'bg-white-500 flex text-sm pb-6'}>
                                <h2 className={'text-xl'}>Price:</h2>
                                <h2 className={'text-xl px-4'}>Rs.<span className={'text-red-500'}>{selectedPrice}</span></h2>
                                <del className={'text-xl'}>Rs.<span className={'text-red-500'}>{selectedPriceOld}</span></del>
                                <h2 className={'text-xl px-6'}>(50% OFF)</h2>
                            </p>
                            <p className={'bg-white-500 flex text-sm pb-6'}>
                                <h2 className={'text-xl'}>Color:<span className={'text-red-500'}>{selectedColor}</span></h2>
                            </p>

                            {
                                product.loading ?
                                    <>

                                    </> :
                                    <>
                                        <div className={'flex'}>
                                            {
                                                !_.isEmpty(product.data) ?
                                                    !_.isEmpty(product.data.variation) ?
                                                        !_.isEmpty(product.data.variation.props[0]) ?
                                                            !_.isEmpty(product.data.variation.props[0].values) ?
                                                                product.data.variation.props[0].values.map((v, i) => (
                                                                    <div className={'bg-white-500 flex text-sm pb-6'}
                                                                         key={i}>
                                                                        <img
                                                                            className={'text-xl h-20 w-20 border ml-2 border-gray-500 px-4'}
                                                                            onClick={() => handleSelectedColor(v.name)}
                                                                            src={v.image}/>
                                                                    </div>
                                                                ))
                                                                : <></>
                                                            : <></>
                                                        : <></>
                                                    : <></>
                                            }
                                        </div>
                                    </>
                            }



                            <p className={'bg-white-500 flex text-sm pb-6'}>
                                <h2 className={'text-xl'}>Shoe Size:<span className={'text-red-500'}>{selectedShoeSize}</span></h2>
                            </p>

                            {
                                product.loading?
                                    <>

                                    </>:
                                    <>
                                        <div className={'flex'}>
                                            {
                                                !_.isEmpty(product.data)?
                                                    !_.isEmpty(product.data.variation)?
                                                        !_.isEmpty(product.data.variation.props[1])?
                                                            !_.isEmpty(product.data.variation.props[1].values)?
                                                                product.data.variation.props[1].values.map((v,i)=>(
                                                                    <div className={'bg-white-500 flex text-sm pb-6'} key={i}>
                                                                        <h2 className={'text-xl h-10 w-20 border ml-2 border-gray-500 px-4'} onClick={()=>handleSelectedShoeSize(v.name)}>
                                                                            {v.name}
                                                                        </h2>

                                                                    </div>
                                                                ))
                                                                :<></>
                                                            :<></>
                                                        :<></>
                                                    :<></>
                                            }
                                        </div>
                                    </>
                            }
                        </div>

                </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTask;