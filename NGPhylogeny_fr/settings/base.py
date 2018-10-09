"""
Django settings for NGPhylogeny_fr project.

Generated by 'django-admin startproject' using Django 1.11.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))))

LOGIN_URL = '/galaxy/login'
LOGIN_REDIRECT_URL = '/'
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '_m(y$t1ukdw&!z-e_)ig5h!=*#y*3db3vh81il_i=n*y24ih9k'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ["127.0.0.1", ]
INTERNAL_IPS = ["127.0.0.1", ]

CRISPY_TEMPLATE_PACK = "bootstrap3"

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'formtools',
    'crispy_forms',
    'account.apps.AccountConfig',
    'galaxy.apps.GalaxyConfig',
    'data.apps.DataConfig',
    'tools.apps.ToolsConfig',
    'workspace',
    'surveys.apps.SurveysConfig',
    'workflows.apps.WorkflowsConfig',
    # 'workspace.apps.WorkspaceConfig',
    'markdown_deux',
    'blast.apps.BlastConfig',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

SESSION_ENGINE = 'django.contrib.sessions.backends.cached_db'
SESSION_EXPIRE_AT_BROWSER_CLOSE = False

ROOT_URLCONF = 'NGPhylogeny_fr.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'NGPhylogeny_fr.wsgi.application'


# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS = (
    # Put strings here, like "/home/html/static" or "C:/www/django/static".
    # Always use forward slashes, even on Windows.
    # Don't forget to use absolute paths, not relative paths.
    os.path.join(BASE_DIR, 'static'),
)

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'level': os.getenv('DJANGO_LOG_LEVEL', 'INFO'),
        },
    },
}

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.db.DatabaseCache',
        'LOCATION': 'ngphylo_cache_table',
    }
}

MARKDOWN_DEUX_STYLES = {'default': {
    "extras": {
        "code-friendly": None,
        "tables": None,
    },
    "safe_mode": False,  # << here's the change
}}

# EMAIL_HOST = '<smtp>'
# EMAIL_PORT = port
# EMAIL_HOST_USER = '<user>'
# EMAIL_HOST_PASSWORD = '<pass>'
# EMAIL_USE_TLS=<True|False>

# CELERY SETTINGS
BROKER_URL = 'redis://localhost:6379/0'
CELERY_ACCEPT_CONTENT = ['json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
# CELERYD_CONCURRENCY = 4
CELERY_TIMEZONE = 'Europe/Madrid'
CELERY_ENABLE_UTC = True

# celery queues setup
CELERY_DEFAULT_QUEUE = 'default'
CELERY_ROUTES = {
    'blast.tasks.launchblast': {'queue': 'blast'},
    'blast.tasks.build_tree': {'queue': 'default'},
    'workspace.tasks.deleteoldblastruns': {'queue': 'default'},
    'workspace.tasks.initializeworkspacejob': {'queue': 'default'},
    'workspace.tasks.monitorworkspace': {'queue': 'default'},
    'workspace.tasks.deletegalaxyhistory': {'queue': 'default'},
    'workspace.tasks.deleteoldgalaxyhistory': {'queue': 'default'},
}

# Launch celery workers with : (1 cpu for blast, the remaining for other tasks)
# celery multi start 2 -l INFO -c:2 1 -Q:1 default -Q:2 blast --app=NGPhylogeny_fr.celery:app
# stop them with
# celery multi stop celery1 celery2
