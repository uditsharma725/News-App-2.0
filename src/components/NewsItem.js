import React from 'react'

export default function NewsItem(props) {

    const { mode, title, des, image, url } = props;

    return (
        <div>

            <div className={`ml-3 mr-3 mb-11 w-72 h-auto border-2 rounded-lg
            border-${mode === 'moon' ? 'slate-200' : 'zinc-700'} 
            bg-${mode === 'moon' ? 'white' : 'zinc-700'}`}>

                <img src={image} alt='...' className=" w-96 h-44 rounded-t-lg" />

                <div className={`max-h-44 px-3 py-5 rounded-lg
                text-${mode === 'moon' ? 'black' : 'white'}`}>

                    <div className="text-xl font-medium h-14 overflow-hidden">
                        {title}
                    </div>
                    <div className="max-h-24 overflow-hidden">
                        {des}
                    </div>

                </div>
                <div className={`px-4 py-3 rounded-lg text-white`}>
                    <a href={url} target='_blank' rel='noreferrer'>

                    <button className={`px-3 py-1 rounded-md ease-in-out duration-300
                        bg-${mode === 'moon' ? 'blue-600' : 'red-600'}
                        hover:bg-${mode === 'moon' ? 'blue-700' : 'red-700'}`}>
                        Read more
                    </button>

                </a>
            </div>

        </div>

        </div >
    )
}
