<script setup>
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';

const produtos = reactive({ items: [] });
const router = useRouter();

onMounted(() => {
    fetch("produtos.json")
        .then((response) => response.json())
        .then((data) => {
            produtos.items = data;
        })
        .catch((error) => {
            console.error("Failed to fetch products:", error);
        });
});

const editarProduto = (id) => {
    router.push({ path: '/editar', query: { id } });
};

const excluirProduto = (id) => {
    const index = produtos.items.findIndex(produto => produto.id === id);
    if (index !== -1) {
        produtos.items.splice(index, 1);
    }
};
</script>

<template>
    <div class="container mt-5">
        <h2>Gerenciar Produtos</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Subcategoria</th>
                    <th>Valor</th>
                    <th>Estoque</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="produto in produtos.items" :key="produto.id">
                    <td>{{ produto.nome }}</td>
                    <td>{{ produto.categoria }}</td>
                    <td>{{ produto.subcategoria }}</td>
                    <td>R$ {{ produto.valor.toFixed(2) }}</td>
                    <td>{{ produto.quantidade_estoque }}</td>
                    <td>
                        <button class="btn btn-sm btn-primary" @click="editarProduto(produto.id)">Editar</button>
                        <button class="btn btn-sm btn-danger" @click="excluirProduto(produto.id)">Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.container {
    margin-top: 2rem;
}

h2 {
    margin-bottom: 1.5rem;
}

.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
}

.btn {
    margin-right: 0.5rem;
}
</style>
