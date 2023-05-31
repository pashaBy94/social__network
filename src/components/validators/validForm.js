export function validate(maxSymbol, setCallback) {
    return (val) => {
        setCallback(false);
        const errors = {};
        if (!val.login) {
            console.log('No login');
            errors.login = 'No login';
        }
        if (!val.password) {
            console.log('No password');
            errors.password = 'No password';
        }
        if (val.login.length > maxSymbol) {
            console.log(`Login max ${maxSymbol} symbol`);
            errors.login = `Login max ${maxSymbol} symbol`;
        }
        if (val.password.length > maxSymbol) {
            console.log(`Password max ${maxSymbol} symbol`);
            errors.password = `Password max ${maxSymbol} symbol`;
        }
        return errors
    }
}

export function validStatus(formik, st){
    if(formik?.status?.errors){
        return <div className={st.messag__errors}>{formik.status.errors}</div>
    }
}

export function validateMessag(maxSymbol, obj) {
    return (val) => {
        const errors = {};
        if (val[obj].length > maxSymbol) {
            errors[obj] = `Messag max ${maxSymbol} symbol`;
        }
        return errors
    }
}

export function validateUrl(maxSymbol) {
    return (val) => {
        console.log(val);
        const errors = {};
        if (val.aboutMe.length > maxSymbol) {
            console.log('No login');
            errors.aboutMe = 'Max symbol is 100';
        }
        // if (!val.password) {
        //     console.log('No password');
        //     errors.password = 'No password';
        // }
        // if (val.login.length > maxSymbol) {
        //     console.log(`Login max ${maxSymbol} symbol`);
        //     errors.login = `Login max ${maxSymbol} symbol`;
        // }
        // if (val.password.length > maxSymbol) {
        //     console.log(`Password max ${maxSymbol} symbol`);
        //     errors.password = `Password max ${maxSymbol} symbol`;
        // }
        return errors
    }
}