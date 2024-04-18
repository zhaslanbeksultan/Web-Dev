from django.urls import path

from . import views
from .views import CompanyListAPIView, VacancyListAPIView, CompanyDetailAPIView, VacancyDetailAPIView, CompanyVacanciesAPIView, TopTenVacanciesAPIView
from api.views import GenericCompanyList, GenericCompanyDetail
from api.views import GenericVacancyList, GenericVacancyDetail
urlpatterns = [
    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:pk>/', GenericCompanyDetail.as_view()),
    path('companies/<int:pk>/vacancies/', CompanyVacanciesAPIView.as_view()),

    path('vacancies/', GenericVacancyList.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', TopTenVacanciesAPIView.as_view()),

    # path('companies/', views.company_list),
    # path('companies/<int:pk>/', views.company_detail),
    # path('companies/<int:pk>/vacancies/', views.company_vacancies),
    #
    # path('vacancies/', views.vacancy_list),
    # path('vacancies/<int:pk>/', views.vacancy_detail),
    # path('vacancies/top_ten/', views.vacancy_top_ten)
]