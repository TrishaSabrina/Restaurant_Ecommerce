from django.apps import AppConfig


class EcokitchenConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'ecokitchen'


    def ready(self):
        import ecokitchen.signals
