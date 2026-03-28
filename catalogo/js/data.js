export const profiles = [
    { name: 'Robin', image: '../assets/robin.jpg' },
    { name: 'Estelar', image: '../assets/estelar.jpg' },
    { name: 'Ravena', image: '../assets/ravena.jpg' },
    { name: 'Mutano', image: '../assets/mutano.jpg' },
    { name: 'Ciborgue', image: '../assets/ciborg.jpg' }
];

export const categories = [
    {
        title: "Mais assistidos",
        items: [
            {
                img: "https://cdn-imgs.s3.sa-east-1.amazonaws.com/wp-content/uploads/2025/07/Superman-2025.webp", top10: true, badge: "Clássico", badgeColor: "green",
                youtube: "https://www.youtube.com/watch?v=bLvqoHBptjg"
            },
            {
                img: "https://ntvb.tmsimg.com/assets/p15791706_v_h8_ai.jpg?w=1280&h=720", progress: 0,
                youtube: "https://www.youtube.com/watch?v=cXg62-t8BWs"
            },
            {
                img: "https://valkirias.com.br/wp-content/uploads/2022/03/valkirias-the-batman-capa-1.png", progress: 0,
                youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g"
            },
            {
                img: "https://static3.go3.tv/scale/go3/images-milano/1bca7028a4b056615ecd0089c7460d0e_WBD_230554_000_BAL_horizontal-title-logo_en-US.jpg?dsth=1080&dstw=1920&srcmode=0&srcx=0&srcy=0&quality=100&type=2&srch=2160&srcw=3840", progress: 0,
                youtube: "https://www.youtube.com/watch?v=a06zxOyQrAs"
            },
        ]
    },
    {
        title: "Séries",
        items: [
            { img: "https://images.squarespace-cdn.com/content/v1/593ca02fa5790aa6650b13d5/ba670e69-248b-4022-be74-bc3ab0cfe601/p26479536_b_h8_ah.jpg", top10: true, badge: "Nova temporada", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://ntvb.tmsimg.com/assets/p9263605_b_h8_am.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images2.alphacoders.com/131/thumb-1920-1316402.jpg", badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.alphacoders.com/127/1272475.jpg", badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
        ]
    },
    {
        title: "Para maratonar",
        items: [
            { img: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/57acff62-4afa-4ebd-8e2f-27ed98de4f6f/compose?aspectRatio=1.78&format=webp&width=1200", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://wallpapers.com/images/hd/batman-animated-tprs3fi0g3u9rwgs.jpg", top10: true, badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images5.alphacoders.com/123/thumb-1920-1236763.jpg", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://s2.dmcdn.net/v/PfRRl1SYWADmrG6LT/x1080", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
        ]
    }
];

export const profileCategories = {
    Robin: [
        {
            title: "Favoritos de Robin",
            items: [
                { img: "https://i.redd.it/vedjoch1jv651.jpg", badge: "Top", youtube: "https://www.youtube.com/watch?v=video1", progress: 93 },
                { img: "https://cdn-imgs.s3.sa-east-1.amazonaws.com/wp-content/uploads/2025/07/Superman-2025.webp", youtube: "https://www.youtube.com/watch?v=video2", progress: 85 },
                { img: "https://images.wallpapersden.com/image/wxl-new-shazam-movie-poster_71435.jpg", youtube: "https://www.youtube.com/watch?v=video3", progress: 78 },
                { img: "https://media.themoviedb.org/t/p/w500_and_h282_face/bYw9KoxuGFQ1WqEO5pLVxb95J3X.jpg", youtube: "https://www.youtube.com/watch?v=video15" },
            ]
        },
        {            
            title: "Você pode gostar",
            items: [
                { img: "https://images5.alphacoders.com/123/thumb-1920-1236763.jpg", youtube: "https://www.youtube.com/watch?v=video10" },
                { img: "https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2023-02/Black%20Adam.png?itok=XplN-Ljz", youtube: "https://www.youtube.com/watch?v=video11" },
                { img: "https://wallpapers.com/images/hd/batman-v-superman-dawn-of-justice-combined-logo-fpeyfdw4ms4oq1rb.jpg", youtube: "https://www.youtube.com/watch?v=video12" },
                { img: "https://w0.peakpx.com/wallpaper/756/845/HD-wallpaper-superman-poster-movie-henry-cavill-man-of-steel-man.jpg", youtube: "https://www.youtube.com/watch?v=video15" },
            ]
        },
        ...categories // mantém categorias padrões caso não queira só personalizadas
    ],
    Estelar: [
        {
            title: "Favoritos de Estelar",
            items: [
                { img: "https://inreviewcritics.com/wp-content/uploads/2020/02/c788_innckcf8611968.0.jpg", progress: 73, badge: "Novo", youtube: "https://www.youtube.com/watch?v=video4" },
                { img: "https://s2.dmcdn.net/v/PfRRl1SYWADmrG6LT/x1080", youtube: "https://www.youtube.com/watch?v=video5" },
                { img: "https://images.squarespace-cdn.com/content/v1/593ca02fa5790aa6650b13d5/ba670e69-248b-4022-be74-bc3ab0cfe601/p26479536_b_h8_ah.jpg", youtube: "https://www.youtube.com/watch?v=video6" },
                { img: "https://images8.alphacoders.com/118/thumb-1920-1183737.jpg", youtube: "https://www.youtube.com/watch?v=video15" },
            ]
        },
        {            
            title: "Você pode gostar",
            items: [
                { img: "https://m.media-amazon.com/images/S/pv-target-images/a389b786e4ab6014c34eda82f70788526b6e7580a0399bec31df4cb4df3a4b76.jpg", youtube: "https://www.youtube.com/watch?v=video10" },
                { img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqftmUvagJR9QTtyLp94Vej9KmL34tCMVX3MMCFpXCNcmg_qjuLvaQWfIlURTo67cb_1V2UekesbD1EsB7kP65ygomN-jfxLEpxouizwg2Jkwz0vt4x6yq0W0Gk_85SZ0XDvMGJVx92cxO/s1600/supergirl+banner.jpg", youtube: "https://www.youtube.com/watch?v=video11" },
                { img: "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/d6/d8/b0/d6d8b01c-d7cf-fc16-729e-0af32f07c1aa/pr_source.lsr/1200x675.jpg", youtube: "https://www.youtube.com/watch?v=video12" },
                { img: "https://thecosmiccircus.com/wp-content/uploads/2022/07/Harley-Quinn-Banner.jpg", youtube: "https://www.youtube.com/watch?v=video15" },
            ]
        },
        ...categories
    ],
    Ravena: [
        {
            title: "Favoritos de Ravena",
            items: [
                { img: "https://images.squarespace-cdn.com/content/v1/593ca02fa5790aa6650b13d5/ba670e69-248b-4022-be74-bc3ab0cfe601/p26479536_b_h8_ah.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=video7" },
                { img: "https://static3.go3.tv/scale/go3/images-milano/1bca7028a4b056615ecd0089c7460d0e_WBD_230554_000_BAL_horizontal-title-logo_en-US.jpg?dsth=1080&dstw=1920&srcmode=0&srcx=0&srcy=0&quality=100&type=2&srch=2160&srcw=3840", progress: 63, youtube: "https://www.youtube.com/watch?v=video8" },
                { img: "https://static.wikia.nocookie.net/arrow/images/4/4d/Title_card_da_3%C2%AA_temporada_de_Batwoman.png/revision/latest?cb=20211017004539&path-prefix=pt-br", youtube: "https://www.youtube.com/watch?v=video9" },
                { img: "https://wallpapers.com/images/hd/batman-animated-tprs3fi0g3u9rwgs.jpg", youtube: "https://www.youtube.com/watch?v=video15" },
            ]
        },
        {            
            title: "Você pode gostar",
            items: [
                { img: "https://thecosmiccircus.com/wp-content/uploads/2022/07/Harley-Quinn-Banner.jpg", youtube: "https://www.youtube.com/watch?v=video10" },
                { img: "https://thelambertpost.com/wp-content/uploads/2023/10/image_2023-10-16_225250810-1200x675.png", youtube: "https://www.youtube.com/watch?v=video11" },
                { img: "https://inreviewcritics.com/wp-content/uploads/2020/02/c788_innckcf8611968.0.jpg", youtube: "https://www.youtube.com/watch?v=video12" },
                { img: "https://ntvb.tmsimg.com/assets/p9263605_b_h8_am.jpg", youtube: "https://www.youtube.com/watch?v=video15" },
            ]
        },
        ...categories
    ],
    Mutano: [
        {
            title: "Favoritos de Mutano",
            items: [
                { img: "https://ntvb.tmsimg.com/assets/p15791706_v_h8_ai.jpg?w=1280&h=720", youtube: "https://www.youtube.com/watch?v=video10" },
                { img: "https://images2.alphacoders.com/131/thumb-1920-1316402.jpg", youtube: "https://www.youtube.com/watch?v=video11" },
                { img: "https://i0.wp.com/www.dabeme.com.br/wp-content/uploads/2021/12/p20173278_b_h8_aa.jpg?fit=960%2C540&ssl=1&resize=1280%2C720", youtube: "https://www.youtube.com/watch?v=video12" },
                { img: "https://valkirias.com.br/wp-content/uploads/2022/03/valkirias-the-batman-capa-1.png", youtube: "https://www.youtube.com/watch?v=video15" },
            ]
        },
        {            
            title: "Você pode gostar",
            items: [
                { img: "https://i.redd.it/vedjoch1jv651.jpg", youtube: "https://www.youtube.com/watch?v=video10" },
                { img: "https://m.media-amazon.com/images/S/pv-target-images/73a880d42d9903682fb6ccab409c79d39dacf66ff060ddf3e60734fe65f32700.jpg", youtube: "https://www.youtube.com/watch?v=video11" },
                { img: "https://m.media-amazon.com/images/S/pv-target-images/5446c602a1f651b8bb7549931203cfa24205291ccd524f3aeadf9c678079c76c.png", youtube: "https://www.youtube.com/watch?v=video12" },
                { img: "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/4c/04/fb/4c04fb3d-e269-c3ed-43a8-0bf4fe62c907/pr_source.lsr/1200x675.jpg", youtube: "https://www.youtube.com/watch?v=video15" },
            ]
        },
        ...categories
    ],
    Ciborgue: [
        {
            title: "Favoritos de Ciborgue",
            items: [
                { img: "https://m.media-amazon.com/images/S/pv-target-images/5446c602a1f651b8bb7549931203cfa24205291ccd524f3aeadf9c678079c76c.png", youtube: "https://www.youtube.com/watch?v=video13" },
                { img: "https://is1-ssl.mzstatic.com/image/thumb/_EdrUwk97v7EPDrY15eRCg/1200x675.jpg", progress: 53, youtube: "https://www.youtube.com/watch?v=video14" },
                { img: "https://m.media-amazon.com/images/S/pv-target-images/73a880d42d9903682fb6ccab409c79d39dacf66ff060ddf3e60734fe65f32700.jpg", youtube: "https://www.youtube.com/watch?v=video15" },
                { img: "https://thelambertpost.com/wp-content/uploads/2023/10/image_2023-10-16_225250810-1200x675.png", progress: 98, youtube: "https://www.youtube.com/watch?v=video15" },
            ]
        },
        {            
            title: "Você pode gostar",
            items: [
                { img: "https://images8.alphacoders.com/118/thumb-1920-1183737.jpg", youtube: "https://www.youtube.com/watch?v=video10" },
                { img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2018/07/aquaman-movie-poster-cropped.jpg", youtube: "https://www.youtube.com/watch?v=video11" },
                { img: "https://m.media-amazon.com/images/S/pv-target-images/fddfe689c211c94282a0896ecd500fbc507e0ebce656d2e7528c167544185520.jpg", youtube: "https://www.youtube.com/watch?v=video12" },
                { img: "https://i0.wp.com/www.dabeme.com.br/wp-content/uploads/2021/12/p20173278_b_h8_aa.jpg?fit=960%2C540&ssl=1&resize=1280%2C720", youtube: "https://www.youtube.com/watch?v=video15" },
            ]
        },
        ...categories
    ]
};
