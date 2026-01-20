from django.urls import path
from . import views

urlpatterns = [
    path('', views.portfolio_home, name='portfolio-home'),
    path('cv/', views.portfolio_cv, name='portfolio-cv'),
]