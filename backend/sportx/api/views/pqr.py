from api.helpers import get_choices, to_lower, to_int
from api.models import Pqr
from api.serializers import PqrSerializer
from cerberus import Validator
from django.conf import settings
from django.db.models import Q
from django.utils.timezone import datetime
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView



class PqrAPI(APIView):
    
    def get(self, request):
        pqrs = Pqr.objects.all()
        if not pqrs:
            return Response(
                data={
                    "message":"PQRS not founds"
                },
                status=status.HTTP_404_NOT_FOUND
            )

        pqrs_serializer = PqrSerializer(pqrs, many=True)
        return Response(
            data={
                "pqrs": pqrs_serializer.data
            },
            status=status.HTTP_200_OK,
        )
    
    def post(self, request):
        validator = Validator({
            "identification":{
                "required":True,
                "type": "string",
            },
            "type_identification":{
                "required":True,
                "type": "integer",
                "allowed":Pqr.TypeIdentification.values,
            },
            "names_customer":{
                "required":True,
                "type": "string",
            },
            "last_names_customer":{
                "required":True,
                "type": "string",
            },
            "mobile_phone":{
                "required":False,
                "type": "string",
            },
            "mobile":{
                "required":False,
                "type": "string",
            },
            "email":{
                "required":True,
                "type": "string",
                "coerce": to_lower,
            },
            "title":{
                "required":True,
                "type": "string",
            },
            "description":{
                "required":True,
                "type": "string",
            },
        })

        if not validator.validate(request.data):
            return Response(
                data={
                    "message": "Invalid validations",
                    "error": validator.errors
                }, 
                status=status.HTTP_400_BAD_REQUEST
            )
        try:
            Pqr.objects.create(**validator.document)
            return Response(
                data={
                    "message": "Pqr created successfully",
                }, 
                status=status.HTTP_201_CREATED
            )

        except Exception as e:
            print(e)
            return Response(
                data={
                    "message": "Some is wrong",
                },
                status=status.HTTP_400_BAD_REQUEST
            )

    def delete(self, request):
        validator = Validator({
            "pqr_id":{
                "required":True,
                "type": "integer",
                "coerce": to_int,
            }
        })

        if not validator.validate(request.query_params):
            return Response(
                data={
                    "message": "Invalid input",
                    "error": validator.errors
                }, 
                status=status.HTTP_400_BAD_REQUEST,
            )
        
        id_pqr = validator.document.get("pqr_id")
        filters = (Q(pk=id_pqr),)
        pqr = Pqr.objects.filter(*filters).first()
        if not pqr:
            return Response(
                data={
                    "message":"PQR not found"
                },
                status=status.HTTP_404_NOT_FOUND
            )
        pqr.delete()

        return Response(
            data={
                "message": "pqr deleted succesfully"
            },
            status=status.HTTP_200_OK,
        )


class PqrSpecificAPI(APIView):

    def get(self, request):
        validator = Validator({
            "pqr_id":{
                "required":True,
                "type": "integer",
                "coerce": to_int,
            }
        })

        if not validator.validate(request.query_params):
            return Response(
                data={
                    "message": "Invalid input",
                    "error": validator.errors
                }, 
                status=status.HTTP_400_BAD_REQUEST,
            )
        

        id_pqr = validator.document.get("pqr_id")
        filters = (Q(pk=id_pqr),)
        pqr = Pqr.objects.filter(*filters)
        if not pqr:
            return Response(
                data={
                    "message":"PQR not found"
                },
                status=status.HTTP_404_NOT_FOUND
            )
        pqrs_serializer = PqrSerializer(pqr, many=True)

        return Response(
            data={
                "pqr": pqrs_serializer.data
            },
            status=status.HTTP_200_OK,
        )
        



class TypeIdentificationDocs(APIView):

    def get(self, request):
        choices_dict = get_choices(Pqr.TypeIdentification)
        return Response(
            data={
                "type_identification": choices_dict
            },
            status=status.HTTP_200_OK
        )

class TypePqrDocs(APIView):

    def get(self, request):
        choices_dict = get_choices(Pqr.TypePqr)
        return Response(
            data={
                "type_identification": choices_dict
            },
            status=status.HTTP_200_OK
        )
