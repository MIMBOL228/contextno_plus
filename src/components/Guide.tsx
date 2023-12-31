export const Guide = () => {
    return (
        <div className="guide">
            <p className="guide_title">Как играть?</p>
            <p>
                Найди секретное слово. У тебя есть неограниченное количество попыток.
                <br/>
                <br/>
                Слова были отсортированы с помощью алгоритма искусственного интеллекта
                в соответствии с тем, насколько они были похожи на секретное
                слово.
                <br/>
                <br/>
                После отправки слова, ты увидишь его позицию. Секретное слово - это номер 1.
                <br/>
                <br/>
                Например, если загадано слово "кот", то слово "кошка" будет находиться близко
                и будет иметь меньший номер, чем слово "собака". Чем меньше номер - тем ближе
                к секретному слову. Как в игре горячо-холодно.
                <br/>
                <br/>
                Алгоритм проанализировал тысячи текстов. Он использует контекст для вычисления
                сходства между словами.
                <br/>
                <br/>
                Присоединяйтесь к нам в <a
                    href="https://t.me/contextnorf"
                    target="blank"
                    className="guide_link">https://t.me/contextnorf</a>
                <br/>
                <br/>
                В группе можно получить бесплатные монеты, которые можно потратить на загадывание
                слов и создание комнат в режиме вечеринки.
            </p>
        </div>
    );
};
