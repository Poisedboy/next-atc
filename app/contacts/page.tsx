
const Contacts = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-center uppercase">Contacts</h1>
            <div className="h-[100px] w-full flex items-center justify-center gap-5">
                <a href='https://www.instagram.com/atc.267/'>
                    Instagram
                </a>
                <a href='https://www.facebook.com/atc267/'>
                    {/* <img
                            src={facebook}
                            alt='facebook'
                            style={{ maxWidth: '45px', maxHeight: '45px' }}
                        /> */}
                    Facebook
                </a>
                <a href='tel: +380 63 883 30 57'>
                    {/* <img
                            src={phone}
                            alt='telephone number'
                            style={{ maxWidth: '45px', maxHeight: '45px' }}
                        /> */}
                    Phone Number
                </a>
                <a href='mailto:atc267gov@gmail.com'>
                    {/* <img
                            src={email}
                            alt='mail'
                            style={{ maxWidth: '45px', maxHeight: '45px' }}
                        /> */}
                </a>
            </div>
            <p className="text-center font-[700] mb-5">
                Our address: 79052, Subotivska str, building 13A,
                Lviv, Ukraine
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1906.096330758124!2d23.96482451441034!3d49.84757638820529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473addf009145895%3A0xf8c9a1a045f7239f!2z0JDQotChIDI2Nw!5e1!3m2!1suk!2sua!4v1678973917373!5m2!1suk!2sua"
                title='ats267'
                style={{ border: '0', width: '100%', height: '75vh' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}

export default Contacts