import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import auth from '../../firebase.init';
import useToken from '../Hooks/useToken';
import Loading from '../Shared/Loading';



const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token]  = useToken(user || gUser);

    const navigate = useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    if (token) {
        navigate('/');
    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
    }

    return (
        <div className="form-container sign-up-container">
                <form className="form"  onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="form-title">Hello, Friend!</h1>
                    <div>
                    <input className='text-neutral' type="text" placeholder="Name" 
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is Required'
                        }
                    })}
                    />
                    <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                    </div>
                    <div>
                    <input className='text-neutral' type="email" placeholder="Email" 
                    {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    })}
                    />
                    <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                    </div>
                    <div>
                    <input className='text-neutral' type="password" placeholder="Password" 
                    {...register("password", {
                        required: {
                            value: true,
                            message: 'Password is Required'
                        },
                        minLength: {
                            value: 6,
                            message: 'Must be 6 characters or longer'
                        }
                    })}
                    />
                    <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                    </div>
                    
                    <button className="form-button">sign up</button>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="form-button"
                    >Continue with Google</button>
                </form>
            </div>
    );
};

export default Register;