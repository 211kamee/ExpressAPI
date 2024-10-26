export const DB_NAME = "chat_db";
export const isAlphaNumeric = (str) => {
	var code, i, len;

	for (i = 0, len = str.length; i < len; i++) {
		code = str.charCodeAt(i);
		if (
			!(code > 47 && code < 58) && // numeric (0-9)
			!(code > 64 && code < 91) && // upper alpha (A-Z)
			!(code > 96 && code < 123) // lower alpha (a-z)
		)
			return false;
	}
	return true;
};

export const cookiesOptions = {
	maxAge: 7 * 24 * 60 * 60 * 1000, // 14 days
	httpOnly: true, // Prevent client side JavaScript from accessing the cookie or XSS attacks
	secure: process.env.NODE_SECURE !== "false", // Only send cookie over HTTPS
	sameSite: process.env.NODE_SAME_SITE, // Prevent cross-site request forgery attacks or CRSF attacks
}