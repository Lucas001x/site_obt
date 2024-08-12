mapa_deficiencias = {
    "Dificuldade de locomoção": 1,
    "Deficiência visual": 2,
    "Deficiência auditiva": 3,
    "Sensibilidade Sensorial": 4,
    "Deficiência de Fala": 5,
    "Deficiência Cognitiva": 6,
    "Deficiência Intelectual": 7,
    "Deficiência Psicossocial": 8
}

deficiencias_selecionadas = ["Dificuldade de locomoção", "Deficiência Intelectual"]

valores_selecionados = [mapa_deficiencias[deficiencia] for deficiencia in deficiencias_selecionadas]
print(valores_selecionados)
