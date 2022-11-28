import { useState, useEffect, useRef } from 'react';
import * as mobilenet from "@tensorflow-models/mobilenet";
import "./Scan.scss";
import { BeatLoader } from 'react-spinners';
import Popup2 from './popup2';
function Scan() {

    const [openModal, setOpenModal] = useState(false);


    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);

    }, []);


    const [isModelLoading, setIsModelLoading] = useState(false)
    const [model, setModel] = useState(null)
    const [imageURL, setImageURL] = useState(null);
    const [results, setResults] = useState([])
    const [history, setHistory] = useState([])

    const imageRef = useRef()
    const textInputRef = useRef()
    const fileInputRef = useRef()

    const loadModel = async () => {
        setIsModelLoading(true)
        try {
            const model = await mobilenet.load()
            setModel(model)
            setIsModelLoading(false)
        } catch (error) {
            console.log(error)
            setIsModelLoading(false)
        }
    }

    const uploadImage = (e) => {
        const { files } = e.target
        if (files.length > 0) {
            const url = URL.createObjectURL(files[0])
            setImageURL(url)
        } else {
            setImageURL(null)
        }
    }

    const identify = async () => {
        textInputRef.current.value = ''
        const results = await model.classify(imageRef.current)
        setResults(results)
    }

    const handleOnChange = (e) => {
        setImageURL(e.target.value)
        setResults([])
    }

    const triggerUpload = () => {
        fileInputRef.current.click()
    }

    useEffect(() => {
        loadModel()
    }, [])

    useEffect(() => {
        if (imageURL) {
            setHistory([imageURL, ...history])
        }
    }, [imageURL])

    if (isModelLoading) {
        return <h2>Model Loading...</h2>
    }

    return (
        loading?
            <BeatLoader className='loader' color= {"#210084"} loading={loading} size={40} />
            :
        
        <div className="Scan">
            
            <h1 className='header'>Image Identification</h1>
            <div className='inputHolder'>
                <input type='file' accept='image/*' capture='camera' className='uploadInput' onChange={uploadImage} ref={fileInputRef} />
                <button className='uploadImage' onClick={triggerUpload}>Upload Image</button>
                <span className='or'>OR</span>
                <input type="text" placeholder='Paste image URL' ref={textInputRef} onChange={handleOnChange} />
            </div>
            <div className="mainWrapper">
                <div className="mainContent">
                    <div className="imageHolder">
                        {imageURL && <img src={imageURL} className = "Upload" alt="Upload Preview" crossOrigin="anonymous" ref={imageRef} />}
                    </div>
                    {results.length > 0 && <div className='resultsHolder'>
                        {results.map((result, index) => {
                            return (
                                <div className='result' key={result.className}>
                                    <span className='name'>{result.className}</span>
                                    <span className='confidence'>Confidence level: {(result.probability * 100).toFixed(2)}% {index === 0 && <span className='bestGuess'>Best Guess</span>}</span>
                                </div>
                            )
                        })}
                    </div>}
                </div>
                {/* {imageURL && <button className='button55' onClick={identify}>Identify Image</button>} */}
                {imageURL && <button className='button55' onClick={() => setOpenModal(true)}>Identify Image</button>}
                
      <Popup2 
      open={openModal} 
      onClose={() => setOpenModal(false)} />
            
            </div>
            {history.length > 0 && <div className="recentPredictions">
                <h2>Recent Images</h2>
                <div className="recentImages">
                    {history.map((image, index) => {
                        return (
                            <div className="recentPrediction" key={`${image}${index}`}>
                                <img src={image}  className= "preimage" alt='Recent Prediction' onClick={() => setImageURL(image)} />
                            </div>
                        )
                    })}
                </div>
            </div>}
        </div>
    );
}

export default Scan;
