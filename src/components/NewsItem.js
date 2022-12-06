import React from 'react'

export default function NewsItem(props) {

    const { mode, title, des, image, url } = props;

    return (
        <div>

            <div className={`ml-3 mr-3 mb-11 w-72 h-auto border-2 rounded-lg
            ${mode === 'moon' ? 'border-slate-200' : 'border-zinc-700'} 
            ${mode === 'moon' ? 'bg-white' : 'bg-zinc-700'}`}>

                <img src={image} alt='...' className=" w-96 h-44 rounded-t-lg" />

                <div className={`max-h-44 px-3 py-5 rounded-lg
                ${mode === 'moon' ? 'text-black' : 'text-white'}`}>

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
                        ${mode === 'moon' ? 'hover:bg-blue-700' : 'hover:bg-red-700'}
                        ${mode === 'moon' ? 'bg-blue-600' : 'bg-red-600'}`}>
                        Read more
                    </button>

                </a>
            </div>

        </div>

        </div >
    )
}
