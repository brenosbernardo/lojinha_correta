<script>
import Navbar from '@/components/Navbar.vue';
import Carrinho from '@/components/Carrinho.vue';
</script>

<template>
    <Navbar />
    <div class="container mt-5">
        <div class="row">
          <div class="col-md-4">
            <img src="#" alt="Produto" id="product-image">
          </div>
          <div class="col-md-8">
            <h2 id="product-name"></h2>
            <p><strong>Descrição:</strong> <span id="product-description"></span></p>
            <p><strong>Valor:</strong> R$ <span id="product-price"></span></p>
            <p><strong>Quantidade em Estoque:</strong> <span id="product-stock"></span></p>
            <div class="form-group">
              <label for="quantity">Quantidade:</label>
              <input type="number" class="form-control" id="quantity" value="1" min="1">
            </div>
            <button class="btn btn-warning" id="addToCartBtn">Comprar</button>
          </div>
        </div>
    
        <div class="containers-sugestoes">
          <h3 class="mt-5">Sugestões</h3>
          <div class="row" id="suggested-products">
            
          </div>
        </div>
      </div>
    <Carrinho />
</template>