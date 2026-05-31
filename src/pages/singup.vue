<template>
    <div class="sinup">
        <Card class="card">
            <template #content>
                <h2>Sign up</h2>
                <Form :resolver="resolver" @submit="onFormSubmit" class="form">
    
                    <FormField v-slot="$field" name="username" initialValue="" class="field">
                        <InputText type="text" placeholder="Username" fluid />
                        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
                            {{ $field.error?.message }}
                        </Message>
                    </FormField>

                    <FormField v-slot="$field" name="first_name" initialValue="" class="field">
                        <InputText type="text" placeholder="First name" fluid />
                        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
                            {{ $field.error?.message }}
                        </Message>
                    </FormField>
    
                    <FormField v-slot="$field" name="last_name" initialValue="" class="field">
                        <InputText type="text" placeholder="Last name" fluid />
                        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
                            {{ $field.error?.message }}
                        </Message>
                    </FormField>
    
                    <FormField v-slot="$field" name="email" initialValue="" class="field">
                        <InputText type="email" placeholder="Email" fluid />
                        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
                            {{ $field.error?.message }}
                        </Message>
                    </FormField>
    
                    <FormField v-slot="$field" asChild name="password" initialValue="">
                        <section class="field">
                            <Password placeholder="Password" :feedback="true" toggleMask fluid />
                            <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
                                {{ $field.error?.message }}
                            </Message>
                        </section>
                    </FormField>
    
                    <FormField v-slot="$field" asChild name="confirm_password" initialValue="">
                        <section class="field">
                            <Password placeholder="Confirm password" :feedback="false" toggleMask fluid />
                            <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
                                {{ $field.error?.message }}
                            </Message>
                        </section>
                    </FormField>
    
                    <Button type="submit" severity="secondary" label="Create account" />
                </Form>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { Form, FormField } from '@primevue/forms';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Message from 'primevue/message';
import Card from 'primevue/card';
import { useAuthStore } from '@/stores/auth.store';

const authStore = useAuthStore();

const resolver = zodResolver(
    z.object({
        username: z
            .string()
            .min(1, { message: 'Username is required.' })
            .max(50, { message: 'Username must be at most 50 characters.' })
            .regex(/^[a-zA-Z0-9_]+$/, { message: 'Username contains invalid characters.' }),

        first_name: z
            .string()
            .min(1, { message: 'First name is required.' })
            .max(50, { message: 'First name must be at most 50 characters.' })
            .regex(/^[a-zA-Z0-9_]+$/, { message: 'First name contains invalid characters.' }),

        last_name: z
            .string()
            .min(1, { message: 'Last name is required.' })
            .max(50, { message: 'Last name must be at most 50 characters.' })
            .regex(/^[a-zA-Z0-9_]+$/, { message: 'Last name contains invalid characters.' }),

        email: z
            .string()
            .min(1, { message: 'Email is required.' })
            .email({ message: 'Enter a valid email address.' }),

        password: z
            .string()
            .min(8, { message: 'Password must be at least 8 characters.' })
            .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
            .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
            .regex(/[^a-zA-Z0-9]/, { message: 'Password must contain at least one special character.' }),

        confirm_password: z.string().min(1, { message: 'Please confirm your password.' }),
    }).refine((data) => data.password === data.confirm_password, {
        message: 'Passwords do not match.',
        path: ['confirm_password'],
    })
);

const onFormSubmit = async ({
    valid,
    values,
}: {
    valid: boolean;
    values: any;
}) => {
    if (!valid) return;

    try {
        const payload = {
            username: values.username,
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password,
        };

        const user = await authStore.register(payload);

        console.log('Usuario creado:', user);

        // router.push('/login');
    } catch (error) {
        console.error(error);
    }
};
</script>

<style scoped>
.form {
    width: 100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}
.sinup {
    display: grid;
    align-items: center;
    justify-content: center;
}
.card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 320px
}
</style>