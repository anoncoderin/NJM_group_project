import Link from 'next/link'
import Image from 'next/image'
import styles from '@/components/GreenButton/GreenButton.module.css'

export default function GreenButton({
    link = '',
    text = '',
    img = '',
    width = '',
    height = '',
    smalltext = ''
}) {

    return (
        <>
            <Link className={styles.linkContainer} href={link} style={{ textDecoration: 'none' }}>
                <div className={styles.buttonContainer}>
                    {img === '' ? '' : <Image className={styles.graphicImage} src={img} width={width} height={height} />}
                    <p>{text} </p>
                    {smalltext === '' ? '' : <p className={styles.smallText}>{smalltext}</p>}
                </div>
            </Link>
        </>
    )
}