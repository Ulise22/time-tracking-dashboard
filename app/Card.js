import { objectStyle } from './objectStyle'
import Image from 'next/image'

export default function Card ({item, index, view}) {

    return(
        <article className='relative'>
            <section style={{background: objectStyle[index].color}} className={`flex z-0 justify-end rounded-t-xl `}>
                <Image className='z-0' src={objectStyle[index].img} alt='#' height={80} />
            </section>
            <section className='grid z-20 gap-4 bg-darkBlue hover:bg-desaturatedBlue -mt-6 p-7 rounded-xl h-46 cursor-pointer lg:absolute w-full lg:w-64'>
                <div className='flex items-center justify-between'>
                    <h4 className='font-medium text-lg'> {item.title} </h4>
                    <p className='text-paleBlue text-lg font-bold hover:text-white cursor-pointer'>...</p>
                </div>
                <h1 className='text-5xl font-light'> 
                { view == "day" ? item.timeframes.daily.current :
                    view == "week" ? item.timeframes.weekly.current :
                    item.timeframes.monthly.current
                }hrs
                    </h1>

                    <p className='text-paleBlue'>Last {view} - <span />
                    { view == "day" ? item.timeframes.daily.previous :
                    view == "week" ? item.timeframes.weekly.previous :
                    item.timeframes.monthly.previous
                }hrs
                    </p>
            </section>
        </article>
    )
}