# from .views1 import company_list, company_detail, company_vacancies, vacancy_list, vacancy_detail, vacancy_top_ten
from .fbv import company_list, company_detail, company_vacancies, vacancy_list, vacancy_detail, vacancy_top_ten
from .cbv import CompanyListAPIView, VacancyListAPIView, CompanyDetailAPIView, VacancyDetailAPIView, CompanyVacanciesAPIView, TopTenVacanciesAPIView
from .generic_v1 import GenericCompanyList, GenericCompanyDetail
from .generic_v2 import GenericVacancyDetail, GenericVacancyList