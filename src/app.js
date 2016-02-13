import treeGa from './ga.js';

var actionTree = [
        {
                title: 'Вакансии',
                children: [
                        {
                                title: 'Одиночная операция',
                                children: [
                                        {
                                                title: 'Публикация',
                                                alias: 'vacancyPublication'
                                        },
                                        {
                                                title: 'Удаление',
                                                alias: 'deleteVacancy'
                                        }
                                ]
                        },
                        {
                                title: 'Групповая операция',
                                children: [
                                        {
                                                title: 'Обновление',
                                                alias: 'groupUpdate'
                                        }
                                ]
                        }
                ]
        },
        {
                title: 'Резюме',
                children: [
                        {
                                title: 'Дейстия',
                                children: [
                                        {
                                                title: 'Просмотр контактов',
                                                alias: 'contackView', 
                                        },
                                        {
                                                title: 'Просмотр резюме',
                                                alias: 'resumeView'
                                        }
                                ]
                        }
                ]
        },
        {
                title: 'Отклики и приглошения',
                children: [
                        {
                                title: 'Просмотр сообщения',
                                children: [
                                        {
                                                title: 'Краткий вид',
                                                alias: 'messageViewBref'
                                        },
                                        {
                                                title: 'Полный вид',
                                                alias: 'messageViewFull'
                                        }
                                ]
                        },
                        {
                                title: 'Просмотр резюме',
                                children: [
                                        {
                                                title: 'Краткий вид',
                                                alias: 'resumeViewBref'
                                        },
                                        {
                                                title: 'Полный вид',
                                                alias: 'resumeViewFull'
                                        }
                                ]
                        }
                ]
        }
]

window.a = new treeGa(actionTree);