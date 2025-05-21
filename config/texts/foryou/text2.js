

const textFY2 = `Dia 06 de Maio de 2025.
 
 Nossa histoia de amor acaba de comecar, comecamos a conversar bem, eu tava apaixodo por ti o quanto era gostoso eu conversar contigo, Algo tao confortavel e fluido conversar contigo era tao apaixonante e gostoso.
  Eu como um exagerado logo lhe chamei de princesa, um dos seus apelidos favoritos e voce dois dias depois me chamou de gatinho...
   voce nao tem ideia o quanto fiquei felizinho e todo bobo
   quando li a mensagem totalmente relizado e emocionado

    Desde entao fomos ficando cada dia mais intimos e criando a nossa conexao.E a cada dia mais um virando parte da rotina do outro ( no meu caso a melhor parte da minha rotina)
      As nossas conversas profundas,apelidos,Rells,rissos,planos pro futuro e ate mesmo conversas mais intimas cada vez foi virando parte essescial da nossa rotina

       Mesmo com essa pequena distancia q nos separa nosso amor cresce a cada dia mais e me apaixono a cada dia por voce cada vez mais.E o meu amor... a o meu amor po voce um amor tao puro verdadeiro de coracao e alma e que a cada dia se renova e cresce cada vez mais.

        Maria clara, oque eu sinto por voce e verdadeiro, e serio,puro e intenso e impossivel em palavras eu descrever o quando lhe amo o quando sou apaixonado por voce, E eu peco ue voce confie em mim pra poder lhe demostrar todo esse amor por voce ate  fim das nossas vidas, prometo ser o namorado e esposo que voce sempre sonhou, lhe ama-la e respeita-la, quero junto com voce realizar todos os seus sonhos e estar ao seu lado sempre em todos os momentos.
         Voce na sabe o quanto lhe adimiro tenho um orgulho tao grande por voce meu amor,voce e alguem tao esforcada,incrivel,forte,inteligente e determina.Eu como seu namorado me encho de orgulho por voce.

          Outra coisa que me deixa MALUCOOOOO e o quando voce e linda!!! AMOR TU ME DEIXA SEM FOLEGO! serio amor tu e tao linda a sua beleza e tao unica delicada,surreal,alucinante,inspiradora voce e uma obra de arte a oitava maralivilha do mundo sua beleza e extrardinaria e algo de outro mundo voce daria facil pra ser a modelo mais linda do mundo e tanta perfeicao em uma pessoa so que chega a ser loucura.
           P E R F E I C A O  nem isso e capaz definir voce, cada detalhezinho seu voce e uma deusa dos pes a cabeca.Cada minimo detalhe como seu bebelo lindo que incrivelmente sempre esta perfeito,
           o seu rostinho lindo q da vontad de beijar todinho, cada partes linda sua seu narizin,seus olhinhos,sua sombrancelha, e sua boquinha TOTOSA q sempre abre aquele sorriso maravilhoso q amo!!!
           e agora... a o seu corpinho... SLK QUE MUIE GOSTOSA q cavalona q corpao do caralho pqp Tu me deixa maluco tu e muito perfeita amorrr seu corpo e surreal so de lembrar ja me da ate um coiso.
           meu amor,sou loucamente apaixonado por cada detalhe seu voce e meu sonho e a minha deusa e nadinha precisa mulher e tenho orgulho de dizer a minha mulher e a mais linda do mundo.

            Amor... por ultimo mas nao menos imporante nosso futuro.Todoss os dias eu penso nesse assunto e prometo a voce q iremos se ver o quando antes irei fazer de tudo pra ser incrivel como nos seus filmes e livros favoritos, vamos ficar juntinhos sempre lhe dar todo amor do univeso e lhe proporcionar momentos unicos e incriveis.
            e no futuro podemos contar ao nossos filhos. E com voce que quero casar e passsar o resto da minha vida, conquistar nossos sonhos e metas e juntos construir nosso imperio eu peco que confie em mim pra tudo, voce e a mulher da minha vida quem eu sempre sonhei. prometo lhe amar lhe respeita-la juntos na saude e na doenca, com isso minha maria clara lhe pergunto...
        
`;

document.addEventListener("DOMContentLoaded", () => {
  const formattedText = textFY2
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")
    .replace(/ {2}/g, "&nbsp;&nbsp;");

  document.querySelectorAll("*").forEach(el => {
    if (el.innerHTML.includes("${textFY2}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{textFY2\}/g, formattedText);
    }
  });
});
