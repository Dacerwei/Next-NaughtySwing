import React from 'react';
import Head from 'next/head'

export default class HTMLHead extends React.Component{
    render() {
        return(
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="author" content="chinweihsu" />
                <meta name="copyright" content="naughtyswing" />
                <meta itemProp="name" content="Naughty Swing official Website" />
                <meta property="og:title" content="Naughty Swing official Website" />
                <meta property="og:site_name" content=" Naughty Swing 搖擺舞團" />
                <meta property="og:type" content="article" />
                <meta property="og:description" content="Naughty Swing 搖擺舞團，於2015年成立，由6位平均舞齡 10 年、擁有不同街舞背景的舞者所組成。 擅長將不同元素融合至Swing Dance當中，呈現有別於以往的演出，為目前台灣新生代指標性Swing舞團。 2016年發起 I Charleston Taipei 影片拍攝計畫，在2周內突破50萬人次點閱率，並獲得10多家媒體報導，包涵今日台灣、蘋果日報以及TVBS。" />
                <meta property="og:url" content="https://naughtyswing.com.tw" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="google-site-verification" content="5YfTiykR7Gj4p7fNvcQq4zBNeGxPlOnMkrhT-MzUcnk" />
                <meta charSet="utf-8" />
            </Head>
        );
    }
}