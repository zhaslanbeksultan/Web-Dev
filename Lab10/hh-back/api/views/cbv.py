
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

