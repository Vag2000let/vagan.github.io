import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa'
import './contact.scss'

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    console.log('Form submitted:', data)
    // Здесь можно добавить отправку формы (например через EmailJS)
    reset()
  }

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', name: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourprofile', name: 'LinkedIn' },
    { icon: <FaTelegram />, url: 'https://t.me/yourusername', name: 'Telegram' },
    { icon: <FaEnvelope />, url: 'mailto:your.email@example.com', name: 'Email' }
  ]

  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Свяжитесь со мной</h2>

        <div className="contact-container">
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="contact-form"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="form-group">
              <label htmlFor="name">Имя</label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Пожалуйста, введите ваше имя' })}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Пожалуйста, введите ваш email',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Некорректный email адрес'
                  }
                })}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <textarea
                id="message"
                rows="5"
                {...register('message', {
                  required: 'Пожалуйста, введите ваше сообщение',
                  minLength: {
                    value: 10,
                    message: 'Сообщение должно содержать минимум 10 символов'
                  }
                })}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <span className="error-message">{errors.message.message}</span>}
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Отправить сообщение
            </motion.button>
          </motion.form>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3>Контактная информация</h3>
            <p>
              Если у вас есть вопросы или предложения, не стесняйтесь связаться со мной через форму
              или напрямую через социальные сети.
            </p>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
