public with sharing class Accountprovider {
    public Accountprovider() {

    }

    @AuraEnabled
    public static String createAccountRecord(Account objAcc){
        try {
            insert objAcc; 
            return 'record created successfully...!!!';
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @auraEnabled
    public static Account searchAccount(Account objacc){
        try{
            if(objacc != null){
               return ([select id, Name, Type, Rating, Description, SLA__c from Account where Name=:objacc.Name LIMIT 1]); 
            }
            else{
                return null;
            }
        }
        catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @auraEnabled
    public static Applicant__c searchApplicant(Applicant__c objApp){
        try{
            if(objApp != null){
               return ([select id, Name, First_Name__c, Last_name__c, Gender__c from Applicant__c where Name=:objApp.Name LIMIT 1]); 
            }
            else{
                return null;
            }
        }
        catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Account updateAccount(Account objAcc){
        try {
            if(objAcc != null){
                Database.update(objAcc,false);
                return ([select id, Name, Type, Rating, Description, SLA__c from Account where Name=:objAcc.Name LIMIT 1]);
            }
            else{
                return null;
            }
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled
    public static string deleteAccount(Account objAcc){
        try {
            if(objAcc != null){
                delete objAcc;
                return 'Record has been deleted';
            }
            else{
                return null;
            }
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Account> GetSelectedTypeRecords(string AccountType){
        try {
            if(String.isNotBlank(AccountType)){
            return [select id,Name,Type,SLA__c from Account where Type=:AccountType];
            }
            else {
                return null;
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static String deleteSelectedRecords(List<Id> AccIdList){
        try {
            if(!AccIdList.isEmpty()){
            delete [select id from Account where id IN : AccIdList];
            return 'Records deleted successfully..!!!';
            }
            else {
                return 'There is no records are selected';
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Contact> getRelatedContactfromAccount(Account AccName){
        try {
            
            ID AccId = [select id from Account where Name=:AccName.Name].Id;
            system.debug('id='+AccId);
            return ([select id,Name,AccountId,Account.Name from Contact where AccountId=:AccId]);
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   

}