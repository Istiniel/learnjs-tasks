// Accept: */*
// Accept-Charset: utf-8
// Accept-Encoding: gzip,deflate,sdch
// Connection: keep-alive
// Host: google.com
// Origin: http://javascript.info
// Referer: http://javascript.info/some/url
// Как вы можете видеть, присутствуют и Referer, и Origin.

// Вопросы:

// Почему нужен Origin, если Referer содержит даже больше информации?
// Возможно ли отсутствие Referer или Origin, или это неправильно?

// Referer может отсутствовать, origin необходим и обязателен при запросах на сторонние сайты
