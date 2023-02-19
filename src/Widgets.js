import React from 'react';
import './Widgets.css';

const Widgets = () => {
    return (
        <div className='widgets'>
            <iframe>
                <img src='https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FHetalsartcreation%2Fvideos%2F908679887062928%2F&show_text=false&width=476&t=0" width="340" height="1500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" '
                    width='340'
                    height='100%'
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling='no'
                    frameborder='0'
                    allowTransparency='true'
                    allow='encripted-media'
                />

            </iframe>
        </div>
    )
}

export default Widgets;