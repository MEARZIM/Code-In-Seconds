import type { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_DOMAIN_NAME;

export const sendVerificationEmail = async (
    email: string,
    token: string
) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;
    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: "Confirm Your Verification Email",
        html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif;">

    <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f9f9f9">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
                    <tr>
                        <td align="center" style="padding: 40px 20px;">
                            <h2 style="color: #333333; margin-bottom: 20px;">Confirmation Email</h2>
                            <p style="color: #666666; line-height: 1.6;">Thank you for signing up! Please confirm your email address to activate your account.</p>
                            <p style="color: #666666; line-height: 1.6;">To confirm your email, please click the button below:</p>
                            <a href=${confirmLink} style="display: inline-block; background-color: #4CAF50; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-top: 20px;">Confirm Email</a>
                            <p style="color: #666666; line-height: 1.6; margin-top: 20px;">If you did not sign up for an account, no further action is required.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

</body>
</html>

        `
    });
};


export const sendPasswordResetEmail = async (
    email: string,
    token: string
) => {
    const confirmLink = `${domain}/auth/new-password?token=${token}`;
    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: "Confirm Your Verification Email",
        html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif;">

    <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f9f9f9">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
                    <tr>
                        <td align="center" style="padding: 40px 20px;">
                            <h2 style="color: #333333; margin-bottom: 20px;">Reset Password Email</h2>
                            <p style="color: #666666; line-height: 1.6;">Thank you for signing up! Please confirm your email address to activate your account.</p>
                            <p style="color: #666666; line-height: 1.6;">To confirm your email, please click the button below:</p>
                            <a href=${confirmLink} style="display: inline-block; background-color: #4CAF50; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-top: 20px;">Use this Link to reset the Password</a>
                            <p style="color: #666666; line-height: 1.6; margin-top: 20px;">If you did not sign up for an account, no further action is required.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

</body>
</html>

        `
    });
};



export const sendTwoFactorTokenEmail = async (
    email: string,
    token: string
) => {
    const confirmLink = `${domain}/auth/new-password?token=${token}`;
    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: " Two Factor Authentication Code",
        html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Two Factor Authentication </title>
</head>
<body style="font-family: Arial, sans-serif;">

    <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f9f9f9">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
                    <tr>
                        <td align="center" style="padding: 40px 20px;">
                            <h2 style="color: #333333; margin-bottom: 20px;">Reset Password Email</h2>
                            <p style="color: #666666; line-height: 1.6;">Thank you for signing up!</p>
                            <p style="color: #666666; line-height: 1.6;">To confirm your email, please click the button below:</p>
                            <p style="color: #666666; line-height: 1.6;">
                                Use this code to verification : ${token}
                            </p>
                            <p style="color: #666666; line-height: 1.6; margin-top: 20px;">If you did not sign up for an account, no further action is required.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

</body>
</html>

        `
    });
};
