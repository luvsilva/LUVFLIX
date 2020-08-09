import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';

const AppWrapper = styled.div`
  background: var(--grayDark);
`;

function Home() {
  return (
    <PageDefault paddingAll={0}>
      <AppWrapper>
        <BannerMain videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Teorias Filmes da Marvel - até que faz sentido !!!"}/>
        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          category={dadosIniciais.categorias[1]}
        />

        <Carousel
          category={dadosIniciais.categorias[2]}
        />      

        <Carousel
          category={dadosIniciais.categorias[3]}
        />      

        <Carousel
          category={dadosIniciais.categorias[4]}
        />      

        <Carousel
          category={dadosIniciais.categorias[5]}
        />      

        <Footer />
      </AppWrapper>
    </PageDefault>
  );
}

export default Home;