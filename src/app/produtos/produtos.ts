export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;

}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse Logitech G203", preco: 439.00, descricaoPreco: "À vista no PIX", quantidadeEstoque:  47, imagem: "./assets/mouse-3.jpg" },
    { id: 2, descricao: "Apple iMac PRO", preco: 26499.90, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/monitor-1.jpg" },
    { id: 3, descricao: "Teclado Wireless Apple", preco: 749.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 11, imagem: "./assets/teclado-1.jpg" },
    { id: 4, descricao: "Headphone Wireless Sony", preco: 1099.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 23, imagem: "./assets/fone-de-ouvido-2.jpg" },
    { id: 5, descricao: "Airpods Apple Pro", preco: 1549.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 42, imagem: "./assets/fone-de-ouvido-1.jpg" },
    { id: 6, descricao: "Headphone AKG PRO", preco: 399.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 23, imagem: "./assets/fone-de-ouvido-3.jpg" },
    { id: 7, descricao: "HD WDBLUE 1TB 7200RPM", preco: 589.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 13, imagem: "./assets/hd.jpg" },
    { id: 8, descricao: "GPU GTX 1080TI", preco: 6389.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/placa-video.jpg" },
    { id: 9, descricao: "AMD Ryzen 7 3700X", preco: 2890, descricaoPreco: "À vista no PIX", quantidadeEstoque: 9, imagem: "./assets/processador.jpg" },
    { id: 10, descricao: "Notebook Lenovo IdeaPad", preco: 3900, descricaoPreco: "À vista no PIX", quantidadeEstoque: 11, imagem: "./assets/laptop-1.jpg" },
    { id: 11, descricao: "Notebook Acer Aspire 5", preco: 4599, descricaoPreco: "À vista no PIX", quantidadeEstoque: 8, imagem: "./assets/laptop-2.jpg" },
    { id: 12, descricao: "Mouse Padrão c/fio", preco: 25, descricaoPreco: "À vista no PIX", quantidadeEstoque: 13, imagem: "./assets/mouse-1.png" },
    { id: 13, descricao: "Logitech G305 Wireless", preco: 329, descricaoPreco: "À vista no PIX", quantidadeEstoque: 22, imagem: "./assets/mouse-2.jpg" },
    { id: 14, descricao: "Mouse Pequeno Logitech", preco: 59, descricaoPreco: "À vista no PIX", quantidadeEstoque: 31, imagem: "./assets/mouse-4.jpg" },
    { id: 15, descricao: "Teclado Mecânico Apple", preco: 1259.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 16, imagem: "./assets/teclado-2.jpg" }
]