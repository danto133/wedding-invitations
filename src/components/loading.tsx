import Image from 'next/image'

export default function Loading() {
    return (
        <div style={{textAlign: 'center'}}>
            <Image width={20} height={20} src="/assets/images/ajax-loader.gif" alt="loading-icon"/>
        </div>
    )
}