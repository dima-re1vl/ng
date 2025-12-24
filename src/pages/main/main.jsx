import styles from "./Main.module.css"

function Main() {
    return (
        <>
            <h1 className={styles.mainText}>Привет)</h1>
            <h3 className={styles.description}>Для получения подарка необходимо будет выполнить некоторые действия / разгадать то, что зашифровано. Для того, чтобы решить данную головоломку-лабиринт — необходимо использовать браузер, думать над тем, какие сайты пригодяться, где искать ответ :)</h3>
            <h4 className={styles.hint}>Подсказка: все следующие действия будут приводить к тому, что ты получаешь слово. Что же делать с этим словом — тебе его нужно ввести в браузере после символа «/» в конец ссылки. Попробуй для примера ввести в конец /test — оно тебя перекинет на эту же страницу. Если всё получилось — можно двигаться дальше с увереностью, что всё понятно</h4>
            <h3 className={styles.q}>Первое задание простое и надеюсь, что ты уже нашла ответ в коробке. Если нет, то мучения не закончены. Посмотри все листки и введи пароль ниже</h3>
            <div className={styles.box}>
                <input type="number" placeholder="пароль" id="num"/>
                <button className="btn" onClick={(e) => {
                     e.preventDefault();
                     let num = document.getElementById("num");
                     let res = document.getElementById("res");
                     if (num.value == 6193) {
                        res.innerText = "-- -.-- .- ..-" // myau
                     } else {
                        res.innerText = "Код " + num.value + " неправильный("
                     }
                    
                }}>Попробовать</button>
            </div>
            <h3 id="res" className={styles.res}></h3>
            
        </>
        
    )
}

export default Main