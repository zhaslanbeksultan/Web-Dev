
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer

from rest_framework.request import Request
from rest_framework.response import Response


class CompanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CompanyDetailAPIView(APIView):
    def get(self, request, pk=None):
        company = Company.objects.get(id=pk)
        serializer = CompanySerializer(company)
        return Response(serializer.data)


    def put(self, request, pk=None):
        company = Company.objects.get(id=pk)
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        company = Company.objects.get(id=pk)
        company.delete()
        return Response({"deleted": True})

class VacancyDetailAPIView(APIView):
    def get(self, request, pk=None):
        vacancy = Vacancy.objects.get(id=pk)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)


    def put(self, request, pk=None):
        vacancy = Vacancy.objects.get(id=pk)
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        vacancy = Vacancy.objects.get(id=pk)
        vacancy.delete()
        return Response({"deleted": True})

class CompanyVacanciesAPIView(APIView):
    def get(self, request, pk=None):
        company = Company.objects.get(id=pk)
        vacancies = Vacancy.objects.filter(company=company)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

class TopTenVacanciesAPIView(APIView):
    def get(self, request, pk=None):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)