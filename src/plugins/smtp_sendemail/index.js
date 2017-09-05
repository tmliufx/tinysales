import nodemailer from 'nodemailer';
import Config from 'config';

export default () => {
    console.log('ok');
};

// 发送Email（目前使用的是阿里云SMTP发送邮件）
// receivers 目标邮箱，可以用英文逗号分隔多个。（我没试过）
// subject 邮件标题
// text 文本版本的邮件内容
// html HTML版本的邮件内容
// 返回
// result 200是成功，500是失败
// info 是返回的消息，可能是结果的文本，也可能是对象。（这个错误不要暴露给用户）
export const sendemail = (receivers, subject, text, html) =>
    new Promise(resolve => {
        const transporter = nodemailer.createTransport(`smtp://${Config.get('mail_server.username')}:${Config.get('mail_server.password')}@${Config.get('mail_server.service')}`);

        // setup e-mail data with unicode symbols
        const mailOptions = {
            from: Config.get('mail_server.sender_address'), // sender address
            to: receivers,
            subject: subject,
            text: text || 'Hello world 🐴', // plaintext body
            html: html || '<b>Hello world 🐴</b>' // html body
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                resolve({
                    result: 500,
                    info: error
                });
            } else {
                resolve({
                    result: 200,
                    info: info.response
                });
            }
        });
    });
