const idiomaSelect = document.getElementById('idioma');
const fonteSelect = document.getElementById('fonte');
const notificacoesCheckbox = document.getElementById('notificacoes');
const dadosMoveisCheckbox = document.getElementById('dados-moveis');
const privacidadeButton = document.getElementById('privacidade');
const suporteButton = document.getElementById('suporte');

// Objeto de traduções
const translations = {
    'pt-BR': {
        titulo: 'Configurações',
        idiomaLabel: 'Idioma:',
        fonteLabel: 'Fonte:',
        notificacoesLabel: 'Gerenciar Notificações:',
        dadosMoveisLabel: 'Uso de Dados Móveis:',
        privacidadeButton: 'Ver Política de Privacidade',
        suporteButton: 'Entrar em Contato com o Suporte'
    },
    'en-US': {
        titulo: 'Settings',
        idiomaLabel: 'Language:',
        fonteLabel: 'Font:',
        notificacoesLabel: 'Manage Notifications:',
        dadosMoveisLabel: 'Use Mobile Data:',
        privacidadeButton: 'View Privacy Policy',
        suporteButton: 'Contact Support'
    },
    'es-ES': {
        titulo: 'Configuraciones',
        idiomaLabel: 'Idioma:',
        fonteLabel: 'Fuente:',
        notificacoesLabel: 'Gestionar Notificaciones:',
        dadosMoveisLabel: 'Uso de Datos Móviles:',
        privacidadeButton: 'Ver Política de Privacidad',
        suporteButton: 'Contactar con el Soporte'
    }
};

// Função para atualizar o texto da página
function updateTextContent(lang) {
    document.getElementById('titulo').textContent = translations[lang].titulo;
    document.getElementById('idioma-label').textContent = translations[lang].idiomaLabel;
    document.getElementById('fonte-label').textContent = translations[lang].fonteLabel;
    document.getElementById('notificacoes-label').textContent = translations[lang].notificacoesLabel;
    document.getElementById('dados-moveis-label').textContent = translations[lang].dadosMoveisLabel;
    privacidadeButton.textContent = translations[lang].privacidadeButton;
    suporteButton.textContent = translations[lang].suporteButton;
}

idiomaSelect.addEventListener('change', () => {
    const idioma = idiomaSelect.value;
    // Alterar o idioma do site de acordo com a seleção
    document.documentElement.lang = idioma;
    updateTextContent(idioma);
});

fonteSelect.addEventListener('change', () => {
    const fonte = fonteSelect.value;
    // Alterar a fonte do site de acordo com a seleção
    if (fonte === 'bold') {
        document.body.style.fontWeight = 'bold';
        document.body.style.fontFamily = 'sans-serif';
    } else {
        document.body.style.fontWeight = 'normal';
        document.body.style.fontFamily = 'sans-serif';
    }
});

notificacoesCheckbox.addEventListener('change', () => {
    const notificacoes = notificacoesCheckbox.checked;
    if (notificacoes) {
        console.log('Notificações ativadas.');
    } else {
        console.log('Notificações desativadas.');
    }
});

dadosMoveisCheckbox.addEventListener('change', () => {
    const dadosMoveis = dadosMoveisCheckbox.checked;
    if (navigator.connection && navigator.connection.type === "cellular") {
        if (!dadosMoveis) {
            console.log('Dados móveis desativados.');
        } else {
            console.log('Dados móveis ativados.');
        }
    } else {
        console.log('A conexão não está em uma rede de dados móveis.');
    }
});

privacidadeButton.addEventListener('click', () => {
    console.log('Exibindo a política de privacidade.');
    // Redirecionar para a página de política de privacidade ou exibir modal
});

suporteButton.addEventListener('click', () => {
    console.log('Entrando em contato com o suporte.');
    // Redirecionar para a página de suporte ou exibir modal
});

// Atualizar o texto da página inicialmente com base no idioma padrão
updateTextContent(document.documentElement.lang);
